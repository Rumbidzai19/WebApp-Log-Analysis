# Log Analysis with ELK Stack for Web Application Monitoring

## Description
This project uses the ELK Stack (Elasticsearch, Logstash, and Kibana) to analyze web application logs. It tracks user activities such as logins, registrations, password resets, and failed login attempts. Interactive dashboards built using Kibana provide insights and detect anomalies.

## Key Features
- Real-time log ingestion and parsing using Logstash.
- Visualization of user activity trends and failed logins.
- Interactive dashboards for event-specific analysis.
- Randomized log generation script for testing.

## Technologies Used
- **Elasticsearch**: For storing and indexing logs.
- **Logstash**: For log parsing and transformation.
- **Kibana**: For visualizing and analyzing logs.
- **Flask/Express.js**: Web application generating logs.
- **PowerShell**: Script for generating randomized web requests.

## Installation and Setup

### 1. Environment Setup
- Install Elasticsearch, Logstash, and Kibana.
- Install Python (for Flask) or Node.js (for Express.js).

### 2. Configuration
- Set up `logstash.conf` for parsing logs and sending them to Elasticsearch.
- Ensure the `webapp.log` file path is correctly set in the Logstash configuration.
- Import the Kibana dashboard (`.ndjson` file).

### 3. Running the Project
1. **Start Elasticsearch**:
   ```bash
   ./bin/elasticsearch
   ```
2. **Run Logstash**:
   ```bash
   ./bin/logstash -f /path/to/logstash.conf
   ```
3. **Start the Web Application**:
   - For Flask:
     ```bash
     python app.py
     ```
   - For Express.js:
     ```bash
     node app.js
     ```
4. **Access Kibana**:
   - Open `http://localhost:5601` in your browser.

## Usage
- Use the provided PowerShell script to generate random logs:
  ```powershell
  .\randomize.ps1
  ```
- View real-time logs and visualizations in Kibana.

## Visualizations
- **Line Chart**: Failed Logins over time.
- **Bar Chart**: Frequency of Registartions, Logins and Password Resets over time.
- **Metrics**: Number of Records.
- **Pie Chart**: Distribution of different event types.
- **Vertical Guage**: Registartions hit over time.

### Example Screenshots
![Kibana Dashboard](https://i.imgur.com/AjQePEH.png)
![Real Time Log Ingestion](https://i.imgur.com/DA3k2zs.png)

## Challenges Faced
- Parsing complex log formats in Logstash.
- Setting up Kibana visualizations for multi-dimensional data.
- Debugging random log generation script issues.

## Future Enhancements
- Add geolocation tracking for login attempts.
- Implement alerts for suspicious activities (e.g., brute force attacks).
- Host the project on a cloud platform for live demonstrations.

## Project Structure
```
/log-gen        # Web application backend to generate logs
/Configs          # Logstash configuration files
/Dashboards      # Exported Kibana dashboard (.ndjson) 
randomize.ps1    # PowerShell script to generate random logs
README.md
```
You can find the sample log file in log-gen directory

## Acknowledgments
- Elasticsearch and Kibana documentation.
- Tutorials on setting up the ELK Stack.
- Stack Overflow community for troubleshooting.
