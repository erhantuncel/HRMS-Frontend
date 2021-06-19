import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
    const baseUserUrl = "/user"
    const menuItems = [
        {id:1, title: "My Resumes", to: `${baseUserUrl}/candidate/resumes`, role: "candidate" },
        {id:2, title: "Search Job", to: `${baseUserUrl}/candidate/job-adverts`, role: "candidate" },
        {id:3, title: "My Job Adverts", to: `${baseUserUrl}/employer/job-adverts`, role: "employer" },
        {id:4, title: "Candidates", to: `${baseUserUrl}/staff/candidates`, role: "staff" },
        {id:5, title: "Employers", to: `${baseUserUrl}/staff/employers`, role: "staff" },
        {id:6, title: "Job Positions", to: `${baseUserUrl}/staff/job-positions`, role: "staff" }
    ]
    const {user} = useSelector(state => state.userInfo)

    return (
        <Menu inverted vertical fluid>
            {menuItems.filter(link => link.role === user.role)
                .map((link) => (
                    <Menu.Item name={link.title} key={link.id} as={NavLink} to={link.to} />
                ))}
        </Menu>
    )
}
