# ระบุ base image ที่ใช้ Node.js LTS version
FROM node:lts-alpine

# ตั้งค่า working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json เข้าสู่ working directory
COPY package*.json ./

# ติดตั้ง npm packages
RUN npm install

# คัดลอกไฟล์และโฟลเดอร์ที่เหลือในโปรเจคของคุณ
COPY . .

# สร้าง production build
RUN npm run build

# ตั้งค่า base image สำหรับ production environment
FROM nginx:stable-alpine

# คัดลอกไฟล์ production build จากขั้นตอนก่อนหน้า
COPY --from=0 /app/dist /usr/share/nginx/html

# คัดลอกไฟล์ nginx.conf ไปยังไดเรกทอรี /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# สำหรับการสื่อสารกับแอปพลิเคชัน React ที่ทำงานใน Docker container
EXPOSE 100

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]


#docker build -t <images> .
#docker run -p 80:80 --name <container> <images>

# docker build -t smf-cost-insight .
# docker run -p 100:100 --name smf-cost-insight-container smf-cost-insight
