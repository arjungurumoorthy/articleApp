import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Post {
  id: number;
  date: string;
  title: string;
  category: string;
  source: string;
  content: string;
  author: string;
  image:string
}

interface ArticleContextType {
  allPosts: Post[];
  setAllPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    isLoading:Boolean
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider: React.FC<ArticleProviderProps> = ({ children }) => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [isLoading,setIsLoading] = useState<Boolean>(false)
  useEffect(() => {
    setIsLoading(true)
    fetch("https://dummy-rest-api.specbee.site/api/v1/news")
      .then((response) => response.json())
      .then((resp) => {setAllPosts(resp)
    }).finally(()=>setIsLoading(false));
  }, []);
  useEffect(()=>{
    console.log(allPosts,"all in context")
  },[allPosts])

  return (
    <ArticleContext.Provider
      value={{
        allPosts,
        setAllPosts,
        isLoading
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }
  return context;
};
