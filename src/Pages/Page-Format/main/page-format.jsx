import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Loading_01 from "../../../Components/common/Loading/Loading-01/loading";
import Loading_02 from "../../../Components/common/Loading/Loading-02/loading";
import Loading_03 from "../../../Components/common/Loading/Loading-03/loading";
import Loading_04 from "../../../Components/common/Loading/Loading-04/loading";
import Loading_05 from "../../../Components/common/Loading/Loading-05/loading";
import Loading_06 from "../../../Components/common/Loading/Loading-06/loading";
import Loading_07 from "../../../Components/common/Loading/Loading-07/loading";
import Loading_08 from "../../../Components/common/Loading/Loading-08/loading";
import Loading_09 from "../../../Components/common/Loading/Loading-09/loading";
import Loading_10 from "../../../Components/common/Loading/Loading-10/loading";
import Loading_11 from "../../../Components/common/Loading/Loading-11/loading";
import Loading_12 from "../../../Components/common/Loading/Loading-12/loading";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Page1 = ({ isDarkMode }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 640, // breakpoint xs
        sm: 768, // breakpoint sm
        md: 1024, // breakpoint md
        lg: 1488, // breakpoint lg
        xl: 1872, // breakpoint xl
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <div className="container mx-auto"> */}
        {/* <h1>Welcome to Real Time Parametor Dashboard</h1> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Loading_01 />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Loading_02 />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_03 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_04 />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_06 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_07 />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_08 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_09 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_10 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_11 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_12 />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Loading_05 />
            </div>
          </Grid>
        </Grid>
        {/* <h4>Overall Energy Monitoring</h4> */}
        {/* </div> */}
      </ThemeProvider>
    </div>
  );
};

export default Page1;
