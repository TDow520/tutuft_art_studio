
# Tutuft Art Studio

This is a site for users to come and book slots for events that range from rug tufting to oother things like paint and sips events.  These arent the only events that will be held but foer now, these are the main two. 

The user is able to use the links in the top to go from the home page to the events page, and the contact page. There will also be a gallery to display all the images that the user can chose from when it comes to the paint and sip event.  

The owner is the only one with access to the database page that will show them how much material they have on had and will send them notifications when new items need to be bought.  

Overall this site is a consumer site that gives the user options on how they want to spend their night.  


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: This project requires Node.js version 14.1.0 or later. It's important to use a compatible version to avoid issues with dependencies. You can download Node.js from [nodejs.org](https://nodejs.org/).

- **Package Manager**: Both npm (version 6.x or later) and Yarn (version 1.22.x or later) are compatible with this project. If you have `npm` installed, it comes bundled with Node.js. If you prefer `Yarn`, ensure it is installed on your system. You can install Yarn following the instructions on the [Yarn website](https://classic.yarnpkg.com/lang/en/docs/install/).

- **Leaflet**: The project uses `leaflet` for interactive maps, so familiarity with Leaflet's setup and usage might be helpful, although all necessary Leaflet components are installed via npm or Yarn as part of the project dependencies.

- **React and Next.js**: Given that the project is built with Next.js (14.1.0) and React (version 18 or later), a basic understanding of these frameworks will be beneficial for development and maintenance.

- **Other Notable Libraries**:
  - **React-Bootstrap & React-Icons**: For UI components and icons. No additional setup required outside of the npm/Yarn installation.
  - **Nodemailer**: For sending emails. You'll need to configure SMTP or other email sending service credentials to use Nodemailer effectively within the project.
  - **React-Slick & Slick-Carousel**: Used for carousel features. Ensure you review their documentation for advanced usage or customization.
  - **Sharp**: For image processing. Make sure your environment supports native dependencies.

Please follow the installation guide in the "Installation" section to set up your development environment correctly. This will include cloning the project, installing all dependencies via npm or Yarn, and running the project locally for development purposes.

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/TDow520/tutuft_art_studio.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd tutuft_art_studio
    ```

3. **Install the dependencies** using npm or Yarn:

    If using npm:

    ```bash
    npm install
    ```

    Or, if you prefer using Yarn:

    ```bash
    yarn install
    ```

4. **Start the development server**:

    With npm:

    ```bash
    npm run dev
    ```

    Or with Yarn:

    ```bash
    yarn dev
    ```

    After running the development server, the site should be available at [http://localhost:3000](http://localhost:3000).

5. **Open your web browser** and navigate to [http://localhost:3000](http://localhost:3000) to view the project.

Follow these steps to get the project up and running on your local machine for development and testing purposes. For additional commands related to building and deploying the project, refer to the `scripts` section of the `package.json` file.

    ## Project Structure

Below is an overview of the key directories and files within the `Tutuft_art_studio` project:

- `/.next`: This directory is automatically generated when you build your project. It contains the output of the Next.js build process and should not be modified manually or included in version control.

- `/node_modules`: Contains all the npm packages and dependencies your project uses. This directory is also generated automatically when you run `npm install` or `yarn install` and should not be included in version control.

- `/public`: This directory is meant for static files like images, fonts, and the `favicon.ico`. Files in this directory can be accessed directly at the root URL of your deployed site.

- `/src`: The source code of your application. It includes:

  - `/app`: Contains global components and configurations for your project, such as `Layout.jsx`, `Nav-links.jsx`, `NavBanner.jsx`, and a general `Page.jsx` for basic page setup.
  
    - `Global.css`: A global stylesheet for your project. Use this file to add global styles that apply across your entire application.

    - `Favicon.ico`: The favicon for your website, displayed in the browser tab.
  
    - `/about`: Features components specific to the About page, including `mapComponent.jsx` for maps and `page.jsx` for the page structure.
    
    - `/carousel`: Houses the `carousel.jsx` component for image sliders or carousels.
    
    - `/nav_banner`: Includes `layout.jsx` for the layout of the navigation banner and `page.jsx` for content associated with the navigation banner.
    
    - `/upcoming`: Contains components for upcoming events or features, including `Page.jsx` for the main content and `popupModal.jsx` for modal popups.
    
    - `/calendar`: This directory contains all components related to the calendar feature of your project, such as `CalendarBody.jsx`, `CalendarDays.jsx`, `CalendarEvents.jsx`, `CalendarHead.jsx`, `EventImg.jsx`, and a `Page.jsx` for the calendar page.
    
  - `/pages`: This directory contains your application's page files, which utilize Next.js's file-based routing. Any `.jsx` file in this directory corresponds to a route based on its file name.

    - `/api`: Here you can find backend API routes like `sendEmail.jsx` for sending emails through your application and `Request.http` for testing your API endpoints.

This structure is designed to organize your code in a way that separates global components and utilities from specific features and pages, making it easier for future developers to navigate and understand your project.
## Deployment

This project is set up for easy deployment with Vercel, a cloud platform for static sites and Serverless Functions that provides great support for Next.js projects. To deploy your Next.js project on Vercel, follow these steps:

### Prerequisites

- A Vercel account. If you do not have one, you can sign up at [vercel.com](https://vercel.com).
- Vercel CLI installed globally on your machine. You can install it by running `npm i -g vercel` or `yarn global add vercel` in your terminal.

### Steps to Deploy

1. **Log in to Vercel from the CLI** (if you haven't already) by running:

    ```bash
    vercel login
    ```

    Follow the prompts to log in with your Vercel account.

2. **Navigate to your project directory** in the terminal, if you're not already there:

    ```bash
    cd path/to/your/project
    ```

3. **Run the deployment command**:

    ```bash
    vercel
    ```

    The first time you deploy a new project, Vercel CLI will prompt you to set up and configure your project. Follow the prompts:

    - Select "Create a new project."
    - Enter a project name, or press Enter to use the directory name.
    - Set the project’s scope (choose your personal account or a team account).
    - Vercel will detect that it's a Next.js project and set up everything accordingly.

4. **Configure your project settings** (optional):

    Vercel should automatically detect the correct build settings for a Next.js project. However, you can customize settings like Environment Variables by using the Vercel dashboard for your project.

5. **Finalize your deployment**:

    After configuration, Vercel will deploy your project, and you'll receive a deployment URL. Visit this URL to see your live site.

### Continuous Deployment

By default, Vercel offers continuous deployments for your project when you connect your GitHub, GitLab, or Bitbucket repository. Every time you push changes to your repository, Vercel automatically deploys the new version, ensuring your site is always up to date.

For more detailed instructions and advanced configurations, visit the [Vercel documentation](https://vercel.com/docs).

### Custom Domain

If you wish to use a custom domain for your project, you can configure this in the Vercel dashboard under the "Domains" section of your project settings. Vercel provides comprehensive guides to help you link your domain and manage DNS records.

---

By following these steps, you can easily deploy and manage your Next.js project on Vercel, taking advantage of the platform's features for performance, scalability, and ease of use.
