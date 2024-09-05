import React, { useEffect, useState } from "react";
function Articles() {
  const [articlesData, setArticlesData] = useState();

  useEffect(() => {
    fetch("https://dummy-rest-api.specbee.site/api/v1/news")
      .then((response) => response.json())
      .then((resp) => setArticlesData(resp));
  }, []);
  useEffect(() => {
    console.log(articlesData, "data");
  }, [articlesData]);
  const handleCheckboxChange = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <>
      <div className="main-article">
        <div className="options">
          <div className="category">
            <p>Category</p>
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                value="delta"
                onChange={handleCheckboxChange}
              />
              Delta
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                value="Lambda"
                onChange={handleCheckboxChange}
              />
              Lambda
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox3"
                value="Benzinga"
                onChange={handleCheckboxChange}
              />
              Benzinga
            </label>
            <br />
          </div>
          <div className="category">
            <p>Author</p>
            <label>
              <input
                type="checkbox"
                name="werder"
                value="werder"
                onChange={handleCheckboxChange}
              />
              werder
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                value="patrick"
                onChange={handleCheckboxChange}
              />
              patrick
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox3"
                value="Benzinga"
                onChange={handleCheckboxChange}
              />
              Benzinga
            </label>
            <br />
          </div>
          <div className="category">
            <p>Sort By</p>
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                value="delta"
                onChange={handleCheckboxChange}
              />
              Date
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                value="Lambda"
                onChange={handleCheckboxChange}
              />
              Title
            </label>
          </div>
        </div>
        <div className="article-details">
          <div className="article">
          <img
              src="https://dummy-rest-api.specbee.site/sites/default/files/2023-12/Apple-Watch-Ultra-2_9.jpeg"
              className="image"
            />
           
            
              <div className="article-header">
             
                           <span className="article-time">December 21,2023 <span className="article-author">Benzinga</span></span>
              
              <div>para
              </div>
            </div>
           
            
            
           
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Articles;
