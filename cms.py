from dataclasses import dataclass
from os import listdir

projects_dir = "/home/bella/Documents/General/deploy/"

@dataclass
class Project:
    name: str
    description: str
    links: List[Link]

@dataclass
class Link:
    addrs: str
    display_name: str

def main():
    read_projects()

def read_projects():
    projects_addrs = listdir(projects_dir)
    projects = list(map(convert_addr_to_project, projects_addrs))

def convert_addr_to_project(project):
    with open(projects_dir+project) as file:
        text = file.read()
        title = project[:-3]
        temp = text.split("---")
        description = temp[0].strip()
        links = temp[1].strip().split("\n")
        links = list(map(convert_text_to_link, links))
        return Project(title, description, links)

def convert_text_to_link(text):
    display_end = text.find("]")
    addrs_start = text.find("(") + 1
    display = text[1:display_end]
    addrs = text[addrs_start:-1]
    return Link(addrs, display)

if __name__ == "__main__":
    main()
