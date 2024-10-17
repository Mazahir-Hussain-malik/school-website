import React from 'react'
const SuccessStoryCard= ({ videoUrl, studentName, courseName }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="aspect-w-16 aspect-h-9">
      <video className="w-full h-full object-cover" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{studentName}</h3>
      <p className="text-sm text-gray-600">{courseName}</p>
    </div>
  </div>
)

const SuccessStoryGrid= () => {
  const successStories = [
    { id: '1', videoUrl: '/videos/success1.mp4', studentName: 'Ali', courseName: 'Web Development' },
    { id: '2', videoUrl: '/videos/success2.mp4', studentName: 'Mazahir', courseName: 'UI/UX Design' },
    { id: '3', videoUrl: '/videos/success3.mp4', studentName: 'Latif', courseName: 'Data Science' },
    { id: '4', videoUrl: '/videos/success4.mp4', studentName: 'Muhammad', courseName: 'Digital Marketing' },
    { id: '5', videoUrl: '/videos/success5.mp4', studentName: 'Malik', courseName: 'Mobile App Development' },
    { id: '6', videoUrl: '/videos/success6.mp4', studentName: 'shafqat', courseName: 'Cybersecurity' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story) => (
          <SuccessStoryCard key={story.id} {...story} />
        ))}
      </div>
     
    </div>
  )
}

export default SuccessStoryGrid