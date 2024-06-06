import React from 'react';
import Navbar from '../Components/Navbar';
import Course from '../Components/Course';
import Footer from '../Components/Footer';

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ paddingTop: '5rem' }}> {/* Adjust the value of paddingTop to match the height of your navbar */}
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;

