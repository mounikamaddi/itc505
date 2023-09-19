const researchAbstract = () => {
    const doc = document;
    const head = doc.createElement('head');
    
    const metaCharset = doc.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const metaViewport = doc.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    head.appendChild(metaViewport);

    const title = doc.createElement('title');
    title.textContent = 'Research Abstract on Pre-eclampsia';
    head.appendChild(title);

    doc.appendChild(head);

    const body = doc.createElement('body');

    const p = doc.createElement('p');
    p.textContent = 'BMJ 2009 Research';
    body.appendChild(p);

    const style = doc.createElement('style');
    style.textContent = `
        body {
            font-size: 14px;
        }
        .sidebar {
            float: left;
            width: 20%;
            font-size: 0.8rem;
            padding: 20px;
        }
        .content {
            float: right;
            width: 75%;
            padding: 20px;
        }
    `;
    head.appendChild(style);

    const sidebarDiv = doc.createElement('div');
    sidebarDiv.className = 'sidebar';
    // Authors' Affiliation
    const authorsSection = doc.createElement('section');
    const authorsH4 = doc.createElement('h4');
    authorsH4.textContent = "Authors' Affiliation";
    authorsSection.appendChild(authorsH4);

    const address = doc.createElement('address');
    address.innerHTML = `
        <strong>1</strong><br>
        Department of Epidemiology,<br>
        Harvard School of Public Health,<br>
        677 Huntington Ave, Boston, MA<br>
        02115, USA<br><br>
        <strong>2</strong><br>
        Department of Medical Epidemiology and Biostatistics<br>
        and Clinical Epidemiology Unit,<br>
        Department of Medicine,<br>
        Karolinska Institute, S-171 77<br>
        Stockholm, Sweden<br>
    `;
    authorsSection.appendChild(address);
    sidebarDiv.appendChild(authorsSection);

    // ... You'd continue to add each section in a similar fashion ...

    // Append the sidebar to the body
    body.appendChild(sidebarDiv);

    // Content div
    const contentDiv = doc.createElement('div');
    contentDiv.className = 'content';

    // Clinical relevance section
    const clinicalH1 = doc.createElement('h1');
    clinicalH1.textContent = 'Clinical relevance';
    contentDiv.appendChild(clinicalH1);

    const clinicalP = doc.createElement('p');
    clinicalP.textContent = 'In addition to contributing to our understanding of pre-eclampsia, our findings might influence...';
    contentDiv.appendChild(clinicalP);

    // ... Continue to add the rest of the content...

    body.appendChild(contentDiv);

    doc.appendChild(body);

    // Return the complete document
    return doc;
};

document.body.innerHTML = researchAbstract().body.innerHTML;
