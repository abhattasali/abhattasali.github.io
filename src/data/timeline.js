import React from "react";
import { TiVendorMicrosoft} from "react-icons/ti";
import WorkIcon from "@material-ui/icons/Work";

const work_background_style="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";

const timeline = [
  {
    isWork: true,
    contentStyle: {
      borderTop: "5px Solid #a9b7c9",
      background: "#fff",
    },
    contentArrowStyle: { borderLeft: "9px solid  #3f73af" },
    label: "Microsoft",
    title: "Program Manager",
    subtitle: "March 2022 - Present",
    date: "March 2022 - Present",
    detail:
      "some description",
    icon: <TiVendorMicrosoft />,
    iconStyle: { background: work_background_style, color: "white" },
  },
  {
    isWork: true,
    contentStyle: {
      borderTop: "5px Solid #a9b7c9",
      background: "#fff",
    },
    contentArrowStyle: { borderLeft: "9px solid  #3f73af" },
    label: "Microsoft",
    title: "Program Manager Intern",
    subtitle: "May 2021 - Aug 2021",
    date: "May 2021 - Aug 2021",
    detail:
      "some description",
    icon: <WorkIcon />,
    iconStyle: { background: work_background_style, color: "white" },
  },
  {
    isWork: false,
    date: "2017-2021",
    event: "UCLA",
    detail: "Linguistics & Computer Science",
    link: "https://www.microsoft.com/en-us/",
  },
  {
    isWork: true,
    contentStyle: {
      borderTop: "5px Solid #a9b7c9",
      background: "#fff",
    },
    contentArrowStyle: { borderLeft: "9px solid #3f73af" },
    label: "Microsoft",
    title: "Software Engineer Intern",
    subtitle: "Jun 2020 - Sep 2020",
    date: "Jun 2020 - Sep 2020",
    detail:
      " some description",
    icon: <WorkIcon />,
    iconStyle: { background: work_background_style, color: "white" },
  },
  {
    isWork: true,
    contentStyle: {
      borderTop: "5px Solid #a9b7c9",
      background: "#fff",
    },
    contentArrowStyle: { borderLeft: "9px solid #3f73af"},
    label: "Cyborg Mobile | Microsoft",
    title: "New Technologist Intern",
    subtitle: "Jun 2019 - Aug 2019",
    date: "Jun 2019 - Aug 2019",
    detail:
      "some description",
    icon: <WorkIcon />,
    iconStyle: { background: work_background_style, color: "white" },
  },
  {
    isWork: true,
    contentStyle: {
      borderTop: "5px Solid #a9b7c9",
      background: "#fff",
    },
    contentArrowStyle: { borderLeft: "9px solid #3f73af" },
    label: "GetUpside",
    title: "Data Operations Intern",
    subtitle: "Jun 2018 - Sep 2018",
    date: "Jun 2018 - Sep 2018",
    detail:
      "some description",
    icon: <WorkIcon />,
    iconStyle: { background: work_background_style, color: "white" },
  },
  {
    isWork: false,
    date: "2013-2017",
    event: "Thomas Jefferson HS for Science & Technology",
    detail: "Automation Robotics & Mechatronics",
    link: "https://www.microsoft.com/en-us/",
  },
];

export default timeline;
