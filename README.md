# 🌾 FARMLOC

**FARMLOC** stands for **Farmers-Agricultural-Resource-Management-and-Location-Of-Cold-storage**.  
It is a web-based platform designed to empower farmers by providing seamless access to agricultural resources, tools for management, and real-time information about the nearest available cold storages.

## 🔧 Tech Stack

### **Frontend:**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### **Backend:**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### **Database:**
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### **Authentication & Hosting:**
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)


- 📍 Locate nearby cold storages
- 📊 Manage farm resources and inventory
- 🔐 Secure authentication with Firebase
- 🌐 Responsive and modern UI using Tailwind CSS + Bootstrap
- 🧠 Smart integration with backend for real-time updates

## 📁 Project Structure (Basic Idea)

    FARMLOC/
    ├── apps/
    │   ├── frontend/
    │   │   ├── src/
    │   │   ├── public/
    │   │   ├── package.json
    │   │   └── ...
    │   └── backend/
    │       ├── routes/
    │       ├── models/
    │       ├── controllers/
    │       ├── package.json
    │       └── ...
    ├── README.md
    └── ...

## 🛠️ Installation & Setup
Set up **FARMLOC** locally in just a few steps! Follow these instructions to get started. 🛠️

1. **Clone the repository:**
    ```bash
      git clone https://github.com/your-username/FARMLOC.git
      cd FARMLOC

   **Note:** This repository has two branches:
   - `main` - Production/stable branch
   - `dev` - Development branch

2. **Frontend Setup:**
    
        cd apps
        cd frontend
        npm i
        npm dev

3. **Backend Setup:**
    
        cd apps
        cd backend
        npm i
        npm dev

4. **Set Up Environment Variables** (if required)    
    Copy the example environment file:
    ```bash
    cp .env.example .env

  Edit .env to add any necessary configurations (e.g., API keys).  

5. **Start the Application:**  
    npm start

6.  Open your browser and go to http://localhost:3000 to see FARMLOC in action! 🌐

## 🤝 Contributing

When contributing to this project:

Step 1: Find or Create an Issue 🔍
Browse Existing Issues:

Visit FARMLOC Issues.
Look for tasks labeled good first issue or beginner-friendly.
Comment to claim it: “I’d like to work on this!” 🙋‍♂️


Create a New Issue:

Click “New issue” on the issues page.
Use a clear title, e.g., “Add Missing Installation Steps to README”.
Write a description including:

What needs to be done (e.g., add a feature or fix a typo).
Why it’s needed (e.g., improves usability).
Acceptance Criteria (e.g., what makes the task complete).


Add labels like documentation, enhancement, or good first issue.
Submit and wait for maintainer feedback or assignment.

Step 2: Set Up Your Fork 🍴

Fork the Repository:

Go to FARMLOC and click “Fork” (top-right) to create your own copy.
Clone Your Fork:
    ```bash
    git clone https://github.com/YOUR-USERNAME/FARMLOC.git

(Replace YOUR-USERNAME with your GitHub username.)

Navigate to the Folder:
    ```bash
    cd FARMLOC

Add Upstream Remote (to stay updated with the original repo):
    ```bash
    git remote add upstream https://github.com/Pujan-sarkar/FARMLOC.git

**Verify**: git remote -v.


Step 3: Make Changes ✍️

Create a Branch:
    ```bash
    git checkout -b issue-123-update-readme

(Name it after the issue, e.g., issue-123-add-feature.)

Edit Files:

Open the project in your editor (e.g., VS Code: code .).
Example: Update README.md or fix a bug in the code.
Test locally: npm start to ensure it works.


Stage and Commit:

Check changes: git status.
Stage files: git add README.md (or git add . for all).

Commit with a clear message:
git commit -m "Update README with installation steps. Fixes # <issue number>"

Step 4: Push Changes 🚀

Push your branch to your fork:
    ```bash
    git push origin issue-123-update-readme

Step 5: Create a Pull Request (PR) 📬

Open the PR:

Go to your fork: https://github.com/YOUR-USERNAME/FARMLOC.
Click “Compare & pull request” (appears after pushing).
Or visit FARMLOC Pull Requests, click “New pull request”, and select your branch.


Fill Out the PR Form:

Title: E.g., “Add Installation Steps to README #123”.
Description: Summarize changes, reference the issue (“Closes #123”), and include screenshots if applicable.
Check “Allow edits from maintainers” for collaboration.


Submit and Respond:

Submit the PR.
Reply to reviewer comments and make requested changes (edit files, commit, push again).



Step 6: After the PR is Merged 🎉

Sync Your Fork:
    ```bash
    git fetch upstream
    git checkout main
    git merge upstream/main
    git push origin main

Clean Up:

Delete the branch locally: git branch -d issue-123-update-readme.
Delete on GitHub: Via the PR page after merge.


Celebrate your contribution to FARMLOC! 🌟
**Contribution Tips**💡

Test Changes: Run npm start to verify locally.
Keep PRs Small: Focus on one issue per PR.
Ask Questions: Comment on the issue/PR or contact maintainers.
Follow Guidelines: Check for a CONTRIBUTING.md file in the repo.


## 🚦 Getting Started

1. Ensure you have Node.js and pnpm installed  
2. Follow the installation steps above  
3. Start both frontend and backend servers  
4. Navigate to the frontend URL (typically `http://localhost:3000`)  
5. Begin exploring FARMLOC features!

📜 **License**
FARMLOC is licensed under the MIT License. See the LICENSE file for details. 📄



## 🙌 **Our Contributors**

We thank all the amazing contributors who help make **FARMLOC** better every day! 🌾💚

<a href="https://github.com/Pujan-sarkar/FARMLOC/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Pujan-sarkar/FARMLOC" />
</a>

---

🎉 **This project is listed in [GirlScript Summer of Code 2025](https://gssoc.girlscript.tech)!**  
<a href="https://gssoc.girlscript.tech/" target="_blank">
  <img src="https://camo.githubusercontent.com/952866a3a2679243b5bb4b8e977a2e1eebe82074271ca4baa079da59be8efa76/68747470733a2f2f747365312e6d6d2e62696e672e6e65742f74682f69642f4f49502e68374f4241737068324262314b34573943366a694c51486143533f7069643d41706926503d3026683d313830"
    height="180" />
</a>

🎉 **This project is listed in [Open Source Connect India 2025](https://www.osconnect.org)!**

<img src="https://github.com/user-attachments/assets/dc34467a-b396-43b0-a6d7-7eafd601177a"
    height="180" />

We welcome all contributors participating via GSSoC’25 & OSCI'25. Come, collaborate, and grow with us!
</a>


## 📧 Support

For any questions or issues, please create an issue in the repository or contact the development team.

## Maintainer

<table style="width:100%; border: 0;"> <tr> <td align="center" style="border: 0;"> <img src="https://avatars.githubusercontent.com/u/144250917?v=4" width="120" height="120" style="border-radius: 50%;" alt="Pujan Sarkar"/><br/> <strong>Pujan Sarkar</strong><br/><br/> <a href="https://github.com/Pujan-sarkar"> <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white&labelColor=000000" alt="GitHub" /> </a> <a href="https://www.linkedin.com/in/pujan-sarkar"> <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /> </a> </td> </tr> </table>
</div>

⭐ **Don’t forget to star our repo if you like this project!** 🌱💚  
Your support helps us grow and reach more farmers. 
**Happy Coding! 🌱**
