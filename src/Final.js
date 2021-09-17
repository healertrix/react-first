import React from 'react'
import './Final.css'
import ActionAreaCard from "./ActionAreaCard";
import CircularIndeterminate from "./CircularIndeterminate";
import { useFetch } from "./useFetch";
const url = "https://www.scorebat.com/video-api/v3/";
export const Final = () => {

    const { loading, products } = useFetch(url);
  console.log(products);

    return (
      <div className="main">
        
          {loading ? (
            <CircularIndeterminate />
          ) : (
            products.response.map((item,index) => {
              const { title, competition, videos } = item;
              let videoUrl = videos[0].embed.slice(89, 89 + 97);
              return (
                <ActionAreaCard
                  urlVid={videoUrl}
                  title={title}
                      competition={competition}
                      key={index}
                />
              );
            })
          )}
            
            {/* hello */}
      </div>
    );
    }
