## Project: CI/CD Pipeline with AWS Free Tier

# Tools Used:
- AWS CodePipeline (Orchestrates the CI/CD process)
- AWS CodeBuild (Builds and tests the application)
- AWS CodeDeploy (Deploys the application)
- GitHub (Source code repository)
- Docker (Containerization)
- Terraform (Infrastructure as Code)

## Step-by-Step Implementation

# 1. Set Up Your GitHub Repository
- Create a new repository on GitHub.
- Push a sample application (e.g., a simple Node.js or Python app).
- Ensure you have a Dockerfile and buildspec.yml for AWS CodeBuild.
# 2. Configure AWS CodePipeline
- Go to AWS CodePipeline and create a new pipeline.
- Select GitHub as the source provider.
- Choose the repository and branch to monitor for changes.
# 3. Set Up AWS CodeBuild
- Create a CodeBuild project.
- Define the build environment (e.g., Ubuntu with Docker).
- Use a buildspec.yml file to specify build commands.
# 4. Deploy with AWS CodeDeploy
- Create an EC2 instance (Free Tier eligible).
- Install the CodeDeploy agent on the instance.
- Define a appspec.yml file for deployment.
# 5. Automate Infrastructure with Terraform
- Write a Terraform script to provision AWS resources.
# 6. Test and Monitor
- Push changes to GitHub and observe the pipeline execution.
- Monitor logs in AWS CloudWatch.
- Verify deployment on the EC2 instance.
