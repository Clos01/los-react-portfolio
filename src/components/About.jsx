import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>  
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000p] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl dont-bold inline border-b-4 border-pink-600 '> About</p>
                </div>
            </div> 
            <div></div>
  
    <div className='max-w-[1000p] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold '>
            <p>Hi. I'm Carlos Rivas Nice to meet you. Please take a look around </p>
            <img  style={{
                height:300,
                borderRadius: 10,
                marginTop: 15,
                marginLeft:100
            }}
              src="https://lh3.googleusercontent.com/46O_coW2lQXwgNnj8PCkA-QtCq2mLRCMEgbava36oLB7TtK29bo9kDfaPGaqh_MHmRYQzPMQhyPmEhcQgdXdRGt7x6AR02Nvi73Z4AhMHzX3Zvhjqia30Lo45mDRXso2h58UQSb10mSLCae4ZSMJUikuXvrBty_SnUFbq-yYL86TvfIKnSjdAy_ndA0EWivc1xFsaDLi3Mst37OmloZ9xAtcUhF_ycOYfkfN6zJ3riIwolPHW5egvQQjXczzkRQwHcj9ENIYOWRW2kiQzPJK5370rVwhN7hSkSGpeQ5a3gghYr7bZuQPsVdtq2nKx6aChWQ_JDX-DXN-ZOQZ5epJsk4bB6pJd9Lp2dbn8jizqzsS8cilZcKFO8o9P9h_GlHJl97lE7rUomH2bsSZa11M2RbxyUWjjdjLQkmqEBUbeyTWAVabxXAL77KG-9rrcl7xyx95MRTuxtFFY7ANvDuaqsDuy8zAO6ftAu53Mi-JL_Z_BO8tni4NjDYy9olAJ_mEilL2V-APB2QxKL-357XWDu5qSizwB9rYGnKI-4aahiryoG0uMCz_48bn5vOyCeFvLyiNK62-s6WaseRSIPtfCG6TAJ1tCX00XbIWDlvNp9qiv9YaHujIKa0y9wAsiLRqtvEzO5wUKG1dkJcNarWn1H7gtSP1mBnOG4cXpccyvfnBkeNvNvfdGAXQbnkHXbFnwqH9DgJaz5jluZbNAb59pSjoGhmAMqLmkwwEF-KUt9nHeWmNC_HUwOOhFt-smQnj9e06unpBTf2Zgs0D0Muif1sancOSFQxYQA=w756-h944-no?authuser=0" alt="carlos" />
        </div>
       <p className='text-[15px]'> A little about myself.. i am passionate about building software that can help improve the lives of those around me and myself. I want to learn as much as i can and hopefully one day have a business of my mine and i love building things from scratch and this is why being a developer is fun to me because you get to see the process of how it all started. </p> 
    </div>

        </div>

    </div>
  )
}

export default About