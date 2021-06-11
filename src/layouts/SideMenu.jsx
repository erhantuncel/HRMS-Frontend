import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
    const menuItems = [
        { title: "My Resumes", url: "#", role: "candidate" },
        { title: "Search Job", url: "#", role: "candidate" },
        { title: "My Job Adverts", url: "#", role: "employer" },
        { title: "Add Job Adverts", url: "#", role: "employer" },
        { title: "Candidates", url: "#", role: "staff" },
        { title: "Employers", url: "#", role: "staff" }
    ]
    const user = "candidate";

    return (
        <Menu inverted vertical fluid>
            {menuItems.filter(link => link.role === user)
                .map((link) => (
                    <Menu.Item name={link.title} />
                ))}
        </Menu>
    )
}
