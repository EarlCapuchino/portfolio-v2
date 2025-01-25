import styles from '../../styles/blogs/BlogN.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';
import CleanHeader from '../../components/CleanHeader';
import Head from 'next/head';
const markdownContent = `
# / Starting Cloud Computing with AWS
### 04 mar 2024
Hey everyone! This is Sam! I came across cloud computing as an intern, it is not something I learn from school. For some reason, I have gotten quite irritated for not knowing enough about this. "What exactly *is* this 'cloud' thing everyone keeps talking about?". Forget the mental image of fluffy white things holding your vacation photos - though they *are* stored somewhere remote. 

Let's dive in to unravel this concept, focusing on how it applies to you, especially with Amazon Web Services (AWS).

## So, What's the Deal with "The Cloud"?

In simplest terms, cloud computing means using a network of remote servers, not the physical box under your desk, to do things like store your data, run your applications, and deliver services. Instead of you buying and managing physical servers, you "rent" computing resources as needed. It is fundamentally, an on-demand delivery of computing power, database storage, applications and other IT resources through a cloud services platform via the internet.

Think about it like this: Instead of buying your own power generator for your house, you're using the electricity provided by the power grid. You only pay for what you consume, and the power company takes care of all the maintenance. This is the essence of cloud computing.

For example, when you use Google Docs, the document isn't stored directly on your computer. It lives on Google's servers (a part of their 'cloud'), and they are responsible for maintaining that data, ensuring your document is safe, and available whenever you need it.

### The Cloud in Action: Another Analogy - The Tool Library
Think about a tool library. Imagine you're a DIY enthusiast, and you have a project to build a bookshelf. You could buy all the necessary tools: a saw, a drill, a sander, various measuring devices, and more. This is akin to buying your own servers and infrastructure. It requires a significant investment, and once you're done with the bookshelf, those tools might sit idle until your next project.

But what if, instead, there was a tool library? You can visit the library, rent the specific tools you need for the duration of your project, and return them when you're done. You only pay for the time you use the tools, and you don't have to worry about storing or maintaining them. The library handles everything for you, ensuring the tools are available and in good working condition. This, fundamentally, is how the cloud operates.

You access the computing resources – virtual machines, storage, databases, etc. – just like you would rent tools from the library. You utilize them for as long as you need them, scale them up or down based on your demand, and pay only for the resources you actually consume. The cloud provider manages all the underlying infrastructure, allowing you to focus on your projects, be they an application, a website or a machine learning model. This makes it easy to start, grow, and adapt without the overhead of managing hardware or software yourself. It's about on-demand access to powerful tools, precisely when you need them.
## Diving Deeper: Understanding Cloud Computing Concepts

Now that we have a basic grasp, let's get a bit more technical:

* **Infrastructure as a Service (IaaS):** This is the foundation. Imagine renting virtual machines, storage space, and networks. You manage the operating system, applications, and data. Think of this as the barebones elements of your virtual data center. AWS EC2 (Elastic Compute Cloud) is a prime example.
* **Platform as a Service (PaaS):** Here, you're given a platform to build and deploy applications without worrying about infrastructure. You focus on your code, while the platform handles the underlying hardware, operating system, and sometimes even databases. AWS Elastic Beanstalk, for example, allows deployment of web applications without the need to worry about provisioning servers.
* **Software as a Service (SaaS):** This is the complete application, delivered over the internet. You simply use the software without needing to manage any infrastructure. Think of Gmail, Salesforce, or Dropbox.

Here is a quick comparison for your reference:

| Category      | You Manage                                      | Cloud Provider Manages                                      | Example                             |
|---------------|------------------------------------------------|------------------------------------------------------------|------------------------------------|
| **IaaS**      | Applications, Data, Runtime, OS, Virtualization | Servers, Storage, Networking                               | AWS EC2, DigitalOcean Droplets      |
| **PaaS**      | Applications, Data                             | Runtime, OS, Virtualization, Servers, Storage, Networking   | AWS Elastic Beanstalk, Google App Engine |
| **SaaS**      | Application Data                               | Everything Else: Runtime, OS, Virtualization, Servers, Storage, Networking | Gmail, Salesforce, Dropbox |

## Why AWS?

Amazon Web Services (AWS) is a leading cloud provider, offering an incredibly vast array of services. AWS is not simply a collection of servers, it is a large ecosystem of computing, databases, storage, and artificial intelligence services. It is used by some of the world's largest enterprises, small businesses, and personal projects to accomplish different things. AWS boasts a global reach and a mature infrastructure, making it a compelling choice for anyone starting their cloud journey.

Here's a more detailed overview of core AWS services, broken down by category:

* **Compute:**
 * **EC2 (Elastic Compute Cloud):** Virtual servers where you can run your operating systems and applications. You have complete control over the server instance, operating system, and software. You can choose from a variety of instance types optimized for compute, memory, storage, or accelerated computing.
 * **Lambda:** Run code without managing servers (serverless compute). Triggered by events, Lambda scales automatically and you only pay for the actual compute time used, making it efficient for event-driven architectures.
 * **Elastic Beanstalk:** Deploy and scale web applications and services. Supports multiple programming languages and frameworks and makes it easy to quickly deploy and manage your application without directly managing the underlying infrastructure.
 * **ECS (Elastic Container Service):** Run and manage Docker containers, offering different options for container orchestration: Fargate for serverless containers and EC2 for more control over the underlying instances.
 * **EKS (Elastic Kubernetes Service):** Managed Kubernetes service to run and scale containerized application, very common in the industry.

* **Storage:**
 * **S3 (Simple Storage Service):** Object storage for various data, such as files and images. Highly durable and scalable, S3 is used for everything from backups to hosting static websites.
 * **EBS (Elastic Block Storage):** Block storage for use with EC2 instances. Think of it as a virtual hard drive for your servers.
 * **EFS (Elastic File System):** Scalable, shared file system that can be used with multiple EC2 instances concurrently.
 * **Glacier:** Low-cost storage for archival data, ensuring long term retention with a low price.

* **Database:**
 * **RDS (Relational Database Service):** Managed relational databases (MySQL, PostgreSQL, etc.). RDS simplifies the management, administration, and scaling of database instances.
 * **DynamoDB:** NoSQL database for high-scalability applications, perfect for when you don't need strict relational data.
 * **Aurora:** A MySQL and PostgreSQL-compatible database built for speed and scalability, optimized for the AWS environment.

* **Networking:**
 * **VPC (Virtual Private Cloud):** Create private networks for your AWS resources, essentially having your own isolated network.
 * **Route 53:** Scalable DNS web service to direct web traffic to your resources, including EC2 instances and S3 buckets.
 * **CloudFront:** A CDN(Content Delivery Network) service to cache content closer to users, improving content delivery performance

* **Machine Learning:**
 * **SageMaker:** Build, train, and deploy machine learning models. Provides a complete, managed environment for the whole ML lifecycle.
 * **Rekognition:** Provides image and video analysis tools for facial recognition, object detection, and more.
 * **Translate:** Provides text translation capabilities to translate text across different languages.

* **Developer Tools**
 * **CodeCommit:** Version control using git, similar to Github but private to AWS ecosystem.
 * **CodeBuild:** Builds and tests code, useful for implementing automated build pipelines.
 * **CodeDeploy:** Deploys software and code to EC2 instances, Lambda and other AWS compute services.
 * **CodePipeline:** Automates the build, test, and deploy phase, creating a CI/CD pipeline for software deployments.

* **Management and Governance**
 * **CloudWatch:** Monitoring service for AWS resources and the application, this service collects logs, metrics, and events for all AWS services for monitoring and alerting.
 * **CloudTrail:** Records events and API calls in the AWS environment, providing a security audit trail.
 * **Config:** Tracks and assesses your resource configuration, keeping track of your infrastructure and resources.

* **Security, Identity and Compliance**
 * **IAM (Identity and Access Management):** Securely manage access to AWS resources by defining roles and policies.
 * **KMS (Key Management Service):** Manage encryption keys, controlling access to encrypted data and resources.
 * **Secrets Manager:** Securely manage application secrets, passwords, and API keys preventing them from being hardcoded.

## Getting Started: Setting Up Your First AWS Resource - An EC2 Instance

Let's walk through creating a basic EC2 instance, a virtual server on the cloud, as an example.

1. **Sign Up for an AWS Account:** Head over to the AWS website and sign up. You'll need to provide payment details, but you can use the free tier for eligible services.

2. **Access the AWS Management Console:** After signing up, log in to your AWS Management Console. This is your control panel for all things AWS.

3. **Navigate to EC2:** Under the "Services" menu, find "EC2" under the "Compute" section and click on it.

4. **Launch an Instance:** Click on "Launch Instance" then click "Launch Instance" button again.

5. **Choose an AMI (Amazon Machine Image):** An AMI is a template that contains the operating system you want on your instance. Select a "Free tier eligible" AMI. Let's use "Ubuntu Server 22.04 LTS".

6. **Choose an Instance Type:** Select an instance type – for starting out, something like \`t2.micro\` (free tier) is fine.

7. **Configure Instance Details:** You can leave most of the default settings. However, make sure to enable "Auto-assign Public IP" under the "Network settings" so you will have an address you can use to connect via SSH.

8. **Add Storage:** You can leave the default storage setting for now.

9. **Add Tags (Optional):** Add a name for your instance, like 'my-first-ec2-instance'.

10. **Configure Security Groups:** Create a new security group that allows SSH access (port 22) from your IP address. This will be important so that you can connect to your server. For testing purposes you can also add HTTP access by opening port 80, this will allow you to access the webpage of any app you will be running in your server. Make sure that you specify \`0.0.0.0/0\` so that your server is publicly accessible. **Warning**: This should not be the default setting in a production environment.

11. **Review and Launch:** Review your configuration and click "Launch."

12. **Select Key Pair:** When prompted, create a new key pair and download the private key file (\`.pem\` file), as you will use this to access your EC2 instance.

13. **Wait for Your Instance to Start:** Your instance will begin launching. Wait a few minutes until the status check reports "2/2 checks passed."

14. **Connect to Your Instance:**
   
 Open your terminal and navigate to the directory where you downloaded the \`.pem\` file. Then you need to change the permission for your private key. You can do that using the command:
 \`\`\`bash
 chmod 400 <your_private_key>.pem
 \`\`\`
 Example:
 \`\`\`bash
 chmod 400 my_first_key.pem
 \`\`\`
 Now that your private key is secured, you can now connect to your EC2 server using the command below.
 \`\`\`bash
 ssh -i <your_private_key>.pem ubuntu@<your_ec2_public_ip>
 \`\`\`

 Example:
 \`\`\`bash
 ssh -i my_first_key.pem ubuntu@12.345.67.89
 \`\`\`

 You should see something like this:

 \`\`\`terminal
 Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-88-generic x86_64)

     * Documentation:  https://help.ubuntu.com
     * Management:     https://landscape.canonical.com
     * Support:        https://ubuntu.com/advantage
 
 0 updates can be applied immediately.
 
 The programs included with the Ubuntu system are free software;
 the exact distribution terms for each program are described in the
 individual files in /usr/share/doc/*/copyright.
 
 Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
 applicable law.
 
 To run a command as administrator (user "root"), use "sudo <command>".
 See "man sudo_root" for details.
 
 ubuntu@ip-172-31-44-251:~$ 
 \`\`\`

 Congratulations! You're now connected to your first cloud server.

## Some Code Examples

Here are some snippets to give you some initial ideas for what you can do inside your EC2 Instance:

### Python Web Server

First, install necessary packages for running a basic python webserver:

\`\`\`bash
sudo apt update
sudo apt install python3 python3-pip
pip3 install flask
\`\`\`

Create a file named \`app.py\`:

\`\`\`python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
 return "Hello from AWS EC2!"

if __name__ == "__main__":
 app.run(host='0.0.0.0', port=80, debug=True)
\`\`\`

Run your app using:

\`\`\`bash
python3 app.py
\`\`\`

Now you can open your public IP address on your browser and you should see your "Hello from AWS EC2!" message on the browser.

### Bash Script: Displaying System Info

Create a script named \`system_info.sh\`:

\`\`\`bash
#!/bin/bash
echo "System Information:"
echo "-------------------"
echo "Hostname: $(hostname)"
echo "Kernel: $(uname -r)"
echo "CPU: $(lscpu | grep 'Model name' | sed 's/.*:\\s*//')"
echo "Memory: $(free -h | grep Mem | awk '{print $2}')"
echo "Disk Space: $(df -h / | awk '{print $4}')"
\`\`\`

Make it executable and run it:

\`\`\`bash
chmod +x system_info.sh
./system_info.sh
\`\`\`

You'll get something like this as the output:

\`\`\`terminal
System Information:
-------------------
Hostname: ip-172-31-44-251
Kernel: 5.15.0-88-generic
CPU: Intel(R) Xeon(R) Platinum 8124M CPU @ 3.00GHz
Memory: 977M
Disk Space: 7.7G
\`\`\`

## That's It!

And there you have it – a solid introduction to cloud computing with AWS. From understanding the core concepts to deploying your first instance and even writing a basic server application and script, we've covered a lot of ground. AWS offers a rich suite of tools and the flexibility to support almost any project. Whether you're a beginner or someone looking to take their project into the cloud, AWS will be an integral part of your development. Or of course..... Google Cloud Platform.
`;


const Blog1 = () => {
  return (
    <>
       <Head>
            <title>Starting Cloud Computing with AWS | Sam Capuchino</title>
            <link rel ="icon" href="/sam-logo-dark.png"/>
            <meta name="description" content="Full Stack Web Developer and Software Solutions Architect" />
       </Head>
      <div className={`${styles.blogContainer}`}>
         <CleanHeader/>
          <div className={styles.blogContent}>
              <ReactMarkdown
                children={markdownContent}
                remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = (className || '').match(/language-(\w+)/);
                          // Dynamically import SyntaxHighlighter when needed
                          if (!inline && match){
                              const language = match[1]
                            return  (
                                <DynamicSyntaxHighlighter
                                   language={language}
                                      children={String(children).replace(/\n$/, '')}
                                      {...props}
                               />
                            )
                          }
                         return (
                          <code className={className} {...props}>
                              {children}
                          </code>
                       );
                  },
                  table({node, ...props}){
                       return <table style={{ borderCollapse: 'collapse', width: '100%' }} {...props}></table>
                  },
                   th({ node, ...props }) {
                        return <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }} {...props}></th>;
                       },
                   td({ node, ...props }) {
                        return <td style={{ border: '1px solid #ddd', padding: '8px' }} {...props}></td>;
                       },
                   ul({ node, ...props }) {
                        return <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }} {...props}></ul>;
                      },
                    ol({ node, ...props }) {
                         return <ol style={{ listStyleType: 'decimal', paddingLeft: '2rem' }} {...props}></ol>;
                       },
                    li({ node, ...props }) {
                         return <li style={{ marginBottom: '0.5rem' }} {...props}></li>;
                       },

                   h1({node, ...props}){
                        return <h1 className={styles.blogTitle} {...props}></h1>;
                   },
                   h2({node, ...props}){
                       return <h2 className={styles.blogSubtitle} {...props}></h2>;
                   },
                    h3({node, ...props}){
                        return <h3 className={styles.blogSubSubtitle} {...props}></h3>;
                  },


               }}

              />
          </div>
           <div className={styles.blogFooter}>
                <p className={`${styles.blogLabel}`}>sam capuchino | blog 1</p>
          </div>
      </div>
   </>
  );
};


// Helper Component for Dynamic Import
const DynamicSyntaxHighlighter = ({language, children, ...props}) => {
  const [SyntaxHighlighter, setSyntaxHighlighter] = React.useState(null);
  const [dracula, setDracula] = React.useState(null);


  React.useEffect(() => {
    import('react-syntax-highlighter')
        .then(module => {
            setSyntaxHighlighter(() => module.Prism);
            return import('react-syntax-highlighter/dist/esm/styles/prism')

        }).then(module => {
            setDracula(() => module.dracula)
        })
  }, [])

  if(!SyntaxHighlighter || !dracula){
      return <pre><code {...props}>{children}</code></pre>
  }

  return (
      <SyntaxHighlighter
          children={children}
           style={dracula}
          language={language}
          PreTag="div"
          {...props}
      />
  )
}



export default Blog1;