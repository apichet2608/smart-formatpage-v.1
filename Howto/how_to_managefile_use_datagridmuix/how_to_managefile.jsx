import React from "react";
import axios from "axios";
import FileCell from "./Components/AttachedFileCell/AttachedFileCell";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function how_to_managefile() {
  const DataTask = [];

  const handleUploadAndUpdate = async (event, row) => {
    try {
      const formData = new FormData();
      const timestamp = new Date().getTime(); // Get timestamp
      const fileName = `${timestamp}_${event.target.files[0].name}`; // Append timestamp to the front of the filename
      formData.append("file", event.target.files[0], fileName);
      formData.append("taskId", row.id);

      // Upload or update file based on the presence of the taskId
      const response = await axios.post(`URL/upload`, formData); // Use relative path

      // Assuming the response contains the file ID, adjust accordingly
      const newFileId = response.data;
      console.log(newFileId); // Do something with the newFileId
      if (response.status === 201) {
        alert("File uploaded or updated successfully!");
      } else {
        alert("Error uploading file. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading or updating file:", error);
      alert("Error uploading or updating file. Please try again.");
    }

    // featch after upload
  };
  const handleDownload = (text) => {
    const downloadUrl = `${import.meta.env.VITE_IP_API_UPLOAD}${
      import.meta.env.VITE_PATHDOWLOAD
    }/download/${text}`;
    console.log(downloadUrl);
    window.open(downloadUrl, "_blank");
  };
  const handleDelete = async (text) => {
    try {
      // Validate that both id and filename are available
      if (!text.id || !text.attached_file) {
        alert("ID and filename are required.");
        return;
      }

      // Send DELETE request to server
      const response = await axios.delete(
        `URL/delete/${text.id}/${text.attached_file}`
      );

      // Check if the delete was successful
      if (response.status === 200) {
        alert("File deleted successfully!");
      } else {
        alert("Error deleting file. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Error deleting file. Please try again.");
    }
    // featch after delete
  };

  const columns = [
    {
      field: "attached_file",
      headerName: "attached_file",
      width: 150,
      renderHeader: (params) => (
        <div className=" font-bold text-blue-600">Attached File 📂</div>
      ),
      renderCell: (params) => (
        <div className="flex items-center justify-center w-full">
          <FileCell
            row={params.row}
            handleFileUpload={handleUploadAndUpdate}
            handleDownload={handleDownload}
            handleDelete={handleDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataGrid rows={DataTask} columns={columns} />
    </div>
  );
}

export default how_to_managefile;
