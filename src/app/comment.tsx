'use client'

import { useState } from "react";

interface Comment {
  id: number;
  text: string;
  author: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddComment = () => {
    if (newComment && author) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        text: newComment,
        author: author,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthor("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
     
      {/* Displaying Comments */}
      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-lg bg-gray-100">
            <p className="font-medium text-gray-900">{comment.author}</p>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>

      {/* Add New Comment */}
      <h2 className="text-sm mb-2 text-sec">Comment*</h2>
      <textarea
        className="w-full p-2 border border-sec rounded-md mb-4"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>

      <h2 className="text-sm mb-2 text-sec">Name*</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-1 border border-sec rounded-md mb-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <h2 className="text-sm mb-2 text-sec">Email*</h2>
        <input
          type="text"
          className="w-full p-1 border border-sec rounded-md mb-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <h2 className="text-sm mb-2 text-sec">Website*</h2>
        <input
          type="text"
          className="w-full p-1 border border-sec rounded-md mb-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button
          onClick={handleAddComment}
          className="w-full py-2 bg-sec text-pri rounded-md hover:bg-med mt-4"
        >
          Post comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
