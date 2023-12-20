import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AutocompleteComponents from "../Components/Autocomplete/Autocomplete";
import TableHeader from "../Components/TableHeader/TableHeader";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Demo = ({ isDarkMode }) => {
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

  const stylePaper = {
    borderRadius: "10px",
    padding: 1,
    backgroundColor: isDarkMode ? "#4d6064" : "#fff",
  };

  const styleAutocomplete = {
    width: "100%",
    backgroundColor: isDarkMode ? "#fff" : "#fff",
    borderRadius: "10px",
  };

  useEffect(() => {
    //GetAPI();
  }, []);

  const GetAPI = async () => {
    const params = {};
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/`,
        { params }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <div className="container mx-auto"> */}
        {/* <h1>Welcome to Real Time Parametor Dashboard</h1> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper sx={stylePaper}>
              <AutocompleteComponents
                labelProp={"Machine"}
                sx={styleAutocomplete}
                //   options={distinctMachine}
                //   selectedValue={selectedMachine}
                //   getOptionLabelProp={(option) => option && option.machine_id}
                //   onValueChange={handleMachineChange}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Paper sx={stylePaper}>
              <TableHeader Datas={[]} isDarkMode={isDarkMode} />
            </Paper>
          </Grid>
        </Grid>
        {/* <h4>Overall Energy Monitoring</h4> */}
        {/* </div> */}
      </ThemeProvider>
    </div>
  );
};

export default Demo;
