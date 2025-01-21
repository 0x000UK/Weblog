import { useState } from 'react';
import { MdChat, MdEditDocument, MdVerified, MdWatch } from "react-icons/md";
import { FaHeart,FaEye } from "react-icons/fa";
import React from 'react';
import { useSelector } from 'react-redux';

const DashboardPage = () => {

  const userState = useSelector((state) => state.user);



  const [author] = useState({
    name: "John Doe",
    verified: true,
    totalBlogs: 42,
    totalComments: 128,
    totalViews: 15600,
    totalLikes: 2340
  });

  const [recentBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      date: "2024-03-15",
      comments: 24,
      views: 1200
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      date: "2024-03-12",
      comments: 18,
      views: 850
    },
    {
      id: 3,
      title: "Advanced Tailwind CSS Tips",
      date: "2024-03-10",
      comments: 32,
      views: 1500
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Author Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-800">{userState.userInfo.name}</h1>
              {userState.userInfo.verified && (
                <MdVerified className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <p className="text-gray-500">Professional Blog Author</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <MdEditDocument className="w-12 h-12 text-blue-500" />
            <div>
              <p className="text-gray-500">Total Blogs</p>
              <h2 className="text-2xl font-bold text-gray-800">{author.totalBlogs}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <MdChat className="w-12 h-12 text-green-500" />
            <div>
              <p className="text-gray-500">Comments</p>
              <h2 className="text-2xl font-bold text-gray-800">{author.totalComments}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <FaEye className="w-12 h-12 text-purple-500" />
            <div>
              <p className="text-gray-500">Total Views</p>
              <h2 className="text-2xl font-bold text-gray-800">{author.totalViews.toLocaleString()}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <FaHeart className="w-12 h-12 text-red-500" />
            <div>
              <p className="text-gray-500">Total Likes</p>
              <h2 className="text-2xl font-bold text-gray-800">{author.totalLikes.toLocaleString()}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Blogs</h2>
        <div className="space-y-4">
          {recentBlogs.map((blog) => (
            <div key={blog.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800 hover:text-blue-500 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <MdChat className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{blog.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaEye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{blog.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;