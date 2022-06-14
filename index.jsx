import ForgeUI, { render, ProjectPage, Fragment, Text, useState, useProductContext } from '@forge/ui';

const fetchNewIssues = async function(projectKey) {
    const jql = `project in (${projectKey})`;
    const response = await api.asApp().requestJira(route`/rest/api/3/search?jql=${jql}`);
    const data = await response.json();

    return data.total;

}

const NewIssueView = () => {
   const{platformContext: {projectKey}} = useProductContext()
   const [newIssues] = useState(fetchNewIssues(projectKey))
   //const [issues] = useState(fetchNewIssues(issueKey))
    console.log("project key: " + projectKey);
    return (
        <Fragment>
            <Text> The following requests need to be triaged</Text> 
        </Fragment>

    );
};

export const projectPage = render(
    <ProjectPage>
        <NewIssueView/>
    </ProjectPage>
    )