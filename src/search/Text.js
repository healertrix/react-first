import React from 'react'
import  { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Text = () => {
  // const [text, setText] = useState("");

  return (
    <>
      <Box
        sx={{
          width:" 100%",
          maxWidth: "100%",
          padding:"1rem"
        }}
      >
        <TextField fullWidth label="Search Match" id="fullWidth" />
      </Box>
      
        
      
    </>
  );
}
