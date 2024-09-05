import React from "react";

interface AuthorFilterProps {
  authorOptions: Set<string> | undefined;
  selectedAuthors: string[];
  handleAuthorChange: (author: string) => void;
}

const AuthorFilter: React.FC<AuthorFilterProps> = ({ authorOptions, selectedAuthors, handleAuthorChange }) => {
  return (
    <div className="section author">
      <h2>Author</h2>
      <ul>
        {authorOptions && Array.from(authorOptions).map((author) => (
          <li key={author}>
            <input
              type="checkbox"
              id={author}
              checked={selectedAuthors.includes(author)}
              onChange={() => handleAuthorChange(author)}
            />
            <label htmlFor={author}>{author}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorFilter;
