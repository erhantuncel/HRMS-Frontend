import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
    const menuItems = [
        {id:1, title: "My Resumes", url: "#", role: "candidate" },
        {id:2, title: "Search Job", url: "#", role: "candidate" },
        {id:3, title: "My Job Adverts", url: "#", role: "employer" },
        {id:5, title: "Add Job Adverts", url: "#", role: "employer" },
        {id:6, title: "Candidates", url: "#", role: "staff" },
        {id:7, title: "Employers", url: "#", role: "staff" }
    ]
    const user = "candidate";

    return (
        <Menu inverted vertical fluid>
            {menuItems.filter(link => link.role === user)
                .map((link) => (
                    <Menu.Item name={link.title} key={link.id} />
                ))}
        </Menu>
    )
}
