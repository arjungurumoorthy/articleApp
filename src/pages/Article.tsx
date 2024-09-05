import React, { useState, useEffect } from "react";
import "../App.scss";
import { useArticleContext } from "../articleContext";
import CategoryFilter from "../components/CategoryFilter";
import AuthorFilter from "../components/AuthorFilter";
import SortFilter from "../components/SortFilter";
import Pagination from "../components/Pagination";
import PostList from "../components/PostList";
import Loader from "../components/Loader";

interface Post {
  id: number;
  date: string;
  title: string;
  category: string;
  source: string;
  content: string;
  author: string;
  image: string;
}

const Articles: React.FC = () => {
  const postsPerPage = 5;
  const { allPosts, isLoading } = useArticleContext();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);
  const [authorOptions, setAuthorOptions] = useState<Set<string>>();
  const [categoryOptions, setCategoryOptions] = useState<Set<string>>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [sortOption, setSortOption] = useState<"date" | "title">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [dateDirection, setDateDirection] = useState<"asc" | "desc">("desc");

  // Function to filter and sort posts
  const filterAndSortPosts = () => {
    const newFilteredPosts = allPosts
      .filter(
        (post) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(post.source)) &&
          (selectedAuthors.length === 0 ||
            selectedAuthors.includes(post.author))
      )
      .sort((a, b) => {
        if (sortOption === "date") {
          return dateDirection === "desc"
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : new Date(a.date).getTime() - new Date(b.date).getTime();
        } else if (sortOption === "title") {
          return sortDirection === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        return 0;
      });

    setFilteredPosts(newFilteredPosts);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  useEffect(() => {
    filterAndSortPosts();
  }, [selectedCategories, selectedAuthors, sortOption, allPosts, dateDirection, sortDirection]);

  useEffect(() => {
    const author = new Set(allPosts.map((post) => post.author));
    setAuthorOptions(author);
    const category= new Set(allPosts.map((post) => post.source));
    setCategoryOptions(category)
  }, [allPosts]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredPosts.length / postsPerPage));
  }, [filteredPosts]);

  useEffect(() => {
    setCurrentPosts(filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage));
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleAuthorChange = (author: string) => {
    setSelectedAuthors((prev) =>
      prev.includes(author) ? prev.filter((a) => a !== author) : [...prev, author]
    );
  };

  const handleSortChange = (option: "date" | "title") => {
    if (sortOption === option) {
      // Toggle the sort direction if the same option is selected
      if (option === "date") {
        setDateDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      }
    } else {
      if (option === "date") {
        setDateDirection("desc"); // Default to latest to earliest
      } else {
        setSortDirection("asc"); // Default to ascending order
      }
      // Set the sort option and reset the sort direction
      setSortOption(option);
    }
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <aside className="sidebar">
            <CategoryFilter
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              categoryOptions={categoryOptions}
            />
            <AuthorFilter
              authorOptions={authorOptions}
              selectedAuthors={selectedAuthors}
              handleAuthorChange={handleAuthorChange}
            />
            <SortFilter
              sortOption={sortOption}
              sortDirection={sortDirection}
              dateDirection={dateDirection}
              handleSortChange={handleSortChange}
            />
          </aside>
          <div className="content-wrapper">
            <PostList posts={currentPosts} />
            {currentPosts.length ?
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}

            />
:<></>}
          </div>
        </>
      )}
    </div>
  );
};


export default Articles;
