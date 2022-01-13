# LAP 3 Code Challenge
### By [Menelaos Kaskiris](https://github.com/mkaskiris) and [Jakirul Islam](https://github.com/Jakirul)


## Assignment Description
This is a pair assignment that asked us to make a Github repository tracker using the Github API. On the home page, the user is able to enter a username and if valid, it will display all the repositories. Pagination was used so the user can press 'next' or 'prev' to show a new set of repositories of the user. Clicking the repository will show more information about the repository and a link to it on Github.

## Installation & Usage
- For first time installation, type `npm install` to install all required dependencies
- To run the code, type `npm start` in the `root` directory

## Technologies & Libraries
- React
- React Router
- Github API
- useState / useEffect / useLocation / useNavigate / useParams

## Bugs
- None at the moment

## Wins & Challenges
### Wins
- Got the API working
- Implementing pagination
- User is able to click on individual repositories

### Challenges
- We had an issue initially where the home page's username state would reset after a user clicks on a repository and clicks the 'back' button.
    - For example, if you typed in Github and clicked on a repository, clicking 'back' would show nothing 
    - This was **fixed** by passing the state through the `useNavigation` hook and accessing it with `useLocation`.
## Images

### Home Page
![image](https://user-images.githubusercontent.com/8548957/149171069-b947e063-2e71-40d6-adda-caf118932e2b.png)

### Home Page - no username found
![image](https://user-images.githubusercontent.com/8548957/149171273-25f7cce9-cc4e-4a12-a8d7-5cfbfba562d4.png)

### Repository Page
![image](https://user-images.githubusercontent.com/8548957/149171157-41989be2-d60c-4af3-ab8d-dda3ffded8d4.png)
