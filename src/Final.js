import React, { useState, useEffect, useCallback } from "react";
import './Final.css'
import ActionAreaCard from "./ActionAreaCard";
import CircularIndeterminate from "./CircularIndeterminate";
import { useFetch } from "./useFetch";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const url = "https://www.scorebat.com/video-api/v3/";
export const Final = () => {

  
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = useCallback(async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    }, []);

    useEffect(() => {
      getProducts();
    },[]);
  
  const [text, setText] = useState("");
  
  
  const handleSearch = (e) => {
    const result = products.response.filter((word) => {
      if (word.title.includes(text)) {
        return word;
      } 
    });
    if (result.length>0) {
      console.log(result);
    }
   
  }
 

 
  
  return (
    <>
      <Stack spacing={2} direction="row" sx={{ padding: "1.5rem" }}>
        <Box
          sx={{
            width: " 100%",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Search Match"
            id="fullWidth"
            onChange={(e) => (setText(e.target.value))}
          />
        </Box>
        <Button variant="contained" onClick={(e) =>handleSearch(e)}>Search</Button>
      </Stack>
      <div className="main">
        {loading ? (
          <CircularIndeterminate />
        ) : 
            
          (products.response.map((item, index) => {
            const { title, competition, videos, thumbnail, matchviewUrl } =
              item;

            return (
              <ActionAreaCard
                videoDiv={videos[0].embed}
                title={title}
                competition={competition}
                key={index}
                thumbnail={thumbnail}
                matchviewUrl={matchviewUrl}
              />
            );
          })
        )}
      </div>
    </>
  );
    }
