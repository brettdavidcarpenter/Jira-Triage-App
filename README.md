# Triage App
The goal of this project is to facilitate the triage of new issues in jira.

1. Tag issues and notify stakeholders of triage requirements
2. Import automation to facilitate routing of issues
3. Display triage issues on a board or view to conduct triage

![Triage_Final drawio (1) (1)](https://user-images.githubusercontent.com/25650185/173466827-72c374ed-4107-43b7-b6ec-0ae50f4bb85a.png)


--

# Forge Hello World

This project contains a Forge app written in Javascript that displays `Hello World!` in a Jira project page. 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start
- Install dependecies
```
npm install
```
- Modify your app by editing the `src/index.jsx` file.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

