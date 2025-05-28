# 🌦️ Prabh Weather Forecast System

Welcome to the **Prabh Weather Forecast System**, a sleek, full-stack weather application built using React. It allows users to search weather conditions of any city worldwide including:
- 🌡️ Current temperature
- 💧 Humidity
- ☔ Precipitation
- ⏳ Hourly forecasts
- 📅 10-day forecasts

## 🚀 How It All Started

This project began as a simple React app with a mission to show the weather of Chandigarh. Over time, it evolved into a fully functional, cloud-deployable, scalable weather forecasting system using OpenWeatherMap API. Let’s walk through the entire journey — from cloning to cloud deployment.

---

## 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Prabh-Weather-Forecast.git
cd Prabh-Weather-Forecast
```

---

## 🛠️ Step 2: Setup Environment Variables

Create a `.env` file in the root folder:

```bash
touch .env
```

Then paste this inside:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

> 🔑 Replace `your_api_key_here` with your API key from [OpenWeatherMap](https://openweathermap.org/).

---

## 💻 Step 3: Test Locally in VS Code

1. Open folder in **Visual Studio Code**
2. Run:

```bash
npm install
npm start
```

3. Visit: [http://localhost:3000](http://localhost:3000)

You should see a beautiful UI titled **"Prabh Weather Forecast"**.

---

# ☁️ Deployment to the Cloud (AWS EC2)

### 📌 Pre-requisites:
- AWS account
- Free-tier EC2 instance
- Basic terminal/SSH knowledge

---

## 🔐 Step 4: IAM User Setup

1. Login to [AWS Console](https://aws.amazon.com)
2. Go to **IAM > Users > Add User**
3. Create a user named: `prabh-weather-admin`
4. Attach existing policy: `AmazonEC2FullAccess`
5. Download access key/secret (used for CLI or SDK)

---

## 🖥️ Step 5: Launch EC2 Instance

1. Go to **EC2 Dashboard**
2. Launch a new instance:
   - OS: **Ubuntu 22.04 LTS**
   - Instance type: `t2.micro`
   - Key Pair: Create or use an existing `.pem` key
3. Keep port **3000** open in **Inbound Rules**

---

## 🔗 Step 6: SSH into EC2

```bash
ssh -i "your-key.pem" ubuntu@your-public-ip
```

---

## ⚙️ Step 7: Configure Ubuntu on Remote EC2

Once logged in:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Verify versions:
```bash
node -v
npm -v
```

---

## 📥 Step 8: Clone Project on EC2

```bash
git clone https://github.com/YOUR_USERNAME/Prabh-Weather-Forecast.git
cd Prabh-Weather-Forecast
```

---

## 🔐 Step 9: Add `.env` File on EC2

```bash
nano .env
```

Paste your API key:
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

---

## ⚙️ Step 10: Start the App

```bash
npm install
npm run start
```

---

## 🔓 Step 11: Adjust Inbound Rules in EC2

1. Go to **Security Groups > Inbound Rules**
2. Add a rule:
   - Type: **Custom TCP**
   - Port: `3000`
   - Source: `0.0.0.0/0`

---

## 🎉 You're Live!

Now visit:  
```
http://your-ec2-public-ip:3000
```

You should see your deployed weather app running live!

---

## 📌 Uniqueness of This Project

- 🐳 Docker-ready & cloud-deployable
- 🔒 Secure with `.env` and `.gitignore` best practices
- 🌍 Built for global weather queries, fast and reliable
- 🚀 Fully deployable in under 20 minutes


---

## 🙌 Final Words

From zero to a fully working weather app deployed on AWS — you just built and deployed a real-world system. Keep experimenting and building more cloud apps!

> Built with 💙 by Prabhjot Singh
