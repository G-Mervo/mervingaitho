import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import videoSource from "../assets/elevator_pitch.mp4"; // Import the video asset using a relative path

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] w-full"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        Life!
      </motion.p>

      <div className="mt-20 flex flex-wrap">
        <Tabs>
          <TabList>
            <Tab>Bio</Tab>
            <Tab>Elevator Pitch</Tab>
            <Tab>Portfolio</Tab>
            <Tab>Education & Certifications</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 text-secondary text-[15px] max-w-7xl leading-[30px]">
              Mervin Gaitho is a dynamic professional with a diverse background
              in software engineering and a passion for data science. With 3+
              years of experience excelling as a software engineer,
              Mervin&apos;s journey has led him to a new adventure in the
              fascinating realm of data science.
              <br />
              <br />
              Having honed exceptional problem-solving and critical-thinking
              skills through his software engineering career, Mervin possesses
              an in-depth understanding of coding, algorithms, and software
              development best practices. This strong foundation empowers him to
              approach data science challenges with a unique perspective,
              bridging the gap between data science and software development
              seamlessly. <br /> <br />
              As a software engineer, Mervin&apos;s top three skills encompass
              frontend programming using React, backend programming using Python
              and great problem solving skills. One remarkable achievement that
              sets him apart is successfully implementing a retail software for
              a leading distribution company in Mombasa that saw customer
              delivery & service go up by 20% and the IT Operations overhead
              reduce by 35%. This impactful project showcases his ability to
              create and spearhead valuable software projects and leverage IT
              solutions that drive tangible business results.
              <br />
              <br />
              What truly distinguishes Mervin is his exceptional ability to
              create innovative data-driven solutions and integrate them
              effortlessly into existing software systems. This rare combination
              empowers him to optimize the performance and efficiency of
              software products while leveraging data science techniques to
              identify hidden opportunities and streamline processes.
              <br />
              <br />
              Passionate about continuous learning and staying at the forefront
              of technology, Mervin actively learns and shares his knowledge
              with peers and others. He is also creating his blog that will
              enable him to share and contribute more and regularly to both the
              software and data science communities that he has become part of.
              <br />
              <br />
              With an unwavering commitment to excellence, Mervin seeks
              opportunities to collaborate on challenging software and data
              science projects or join teams where he can leverage his expertise
              to drive innovation and achieve data-driven success. His
              contributions promise to enhance decision-making processes, unlock
              valuable insights, and propel organizations towards greater
              efficiency and success.
              <br />
              <br />
              In conclusion, Mervin Gaitho, the aspiring data scientist with a
              strong software engineering background, is a valuable asset to any
              team or project. His dedication to combining technical acumen with
              analytical prowess ensures that he is well-equipped to make a
              significant positive impact wherever he goes.
            </p>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col items-center space-y-4">
              <div
                className="w-full h-0 relative"
                style={{ paddingBottom: "56.25%" }}
              >
                <video controls style={{ width: "100%", height: "320px" }}>
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col items-center space-y-4">
              <div
                className="w-full h-0 relative"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  title="YouTube Video"
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/RXZPAfsJVpM"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <a href="https://youtu.be/RXZPAfsJVpM" className="text-blue-500">
                Group pitch Video
              </a>
              <h2 className="text-lg font-semibold">
                For more, check the work section
              </h2>
            </div>
          </TabPanel>
          <TabPanel>
            <p>ALX Data Science Certification</p>
          </TabPanel>
        </Tabs>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
