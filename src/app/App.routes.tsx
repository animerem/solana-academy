import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Chapter } from 'pages/Chapter/Chapter.controller';
import { Course } from 'pages/Course/Course.controller';
import { Error404 } from 'pages/Error404/Error404.controller';
import { Home } from 'pages/Home/Home.controller';

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path=":course/info" element={<Course />} />
      <Route path=":course/chapter-:chapter" element={<Chapter />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
