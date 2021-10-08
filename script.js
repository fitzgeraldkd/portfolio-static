document.addEventListener('DOMContentLoaded', () => {
    sendRequest('/projects', renderProjects);
})

function renderProjects(projects) {
    console.log(projects);
    projects.forEach(renderProject);
}

function renderProject(project) {
    const images = [];
    if ('vector' in project.images) {
        const attrs = {
            type: 'image/svg+xml',
            srcset: project.images.vector
        };
        images.push(createElement('source', attrs));
    }
    if ('raster' in project.images) {
        images.push(createElement('img', {src: project.images.raster}))
    } else {
        images.push(createElement('img'));
    }
    const image = createElement('picture', {class: 'project-image'}, '', images);
    const helper = createElement('span', {class: 'helper'});
    const imageContainer = createElement('div', {class: 'project-image-container'}, '', [image, helper])

    const headerChildren = [];
    headerChildren.push(createElement('span', {
        class: 'project-title display-6'
    }, project.title));
    for (const technology of project.technologies) {
        const attrs = {
            class: `badge rounded-pill badge-${technology.toLowerCase()}`
        };
        headerChildren.push(' ');
        headerChildren.push(createElement('span', attrs, technology))
    }
    const header = createElement('div', {class: 'project-header'}, '', headerChildren);

    const descriptionChildren = [];
    if (Object.keys(project.links).length > 0) {
        descriptionChildren.push(createElement('br'), createElement('br'));
    }
    for (const linkKey in project.links) {
        const attrs = {
            href: project.links[linkKey],
            role: 'button',
            class: 'btn btn-outline-secondary btn-sm'
        }
        descriptionChildren.push(createElement('a', attrs, linkKey))
        descriptionChildren.push(' ');
    }
    const description = createElement('div', {class: 'project-description'}, project.description, descriptionChildren);

    const details = createElement('div', {class: 'project-details'}, '', [header, description]);

    const projectCard = createElement('div', {class: 'project-card'}, '', [imageContainer, details]);
    document.getElementById('main').append(projectCard);

    renderDivider();
}

function renderDivider() {
    const dividerMask = createElement('div', {class: 'divider-mask'});
    const divider = createElement('div', {class: 'divider'}, '', [dividerMask]);
    document.getElementById('main').append(divider);
}

function createElement(tag, attributes={}, contents='', children=[]) {
    newElement = document.createElement(tag);
    for (const attr in attributes) {
        newElement.setAttribute(attr, attributes[attr])
    }
    newElement.textContent = contents;
    newElement.append(...children)
    return newElement;
}

function sendRequest(endpoint, callback) {
    fetch(`http://localhost:3000${endpoint}`)
        .then(resp => resp.json())
        .catch(error => console.error(error))
        .then(callback);
}