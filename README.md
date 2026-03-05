# Medicine Recommendation System

A machine learning powered web application that predicts diseases based on user symptoms and recommends medications, diets, precautions, and workouts through an interactive health dashboard.

<br>



**First View**


<table>
  <tr>
    <td align="center" width="600">
      <img src="https://github.com/Yash-Bandal/Medicine-Recommendation-System/blob/6b31baea62fc9638803c9000b434a4060da1453c/frontend/health-dashboard/src/assets/M2.png" width="300"/>
      <br>
      <b>Dashboard</b>
    </td>
    <td align="center" width="600">
      <img src="https://github.com/Yash-Bandal/Medicine-Recommendation-System/blob/6b31baea62fc9638803c9000b434a4060da1453c/frontend/health-dashboard/src/assets/M21.png" width="300"/>
      <br>
      <b>Metrics</b>
    </td>
  </tr>
</table>

<br>

## Project Overview

This application allows users to input symptoms and receive:

* Predicted disease
* Recommended medications
* Suggested diet plans
* Precautions
* Workout recommendations

The system uses machine learning models trained on a medical dataset containing multiple diseases and symptoms.

<br>





## Dataset Information

The system is trained on a medical dataset containing:

| Dataset Component   | Count      |
| ------------------- | ---------- |
| Total Diseases      | 42         |
| Total Symptoms      | 132        |
| Classification Type | Multiclass |



<br>



## Machine Learning Models

Multiple machine learning models were evaluated for disease prediction.

| Model                     | Accuracy |
| ------------------------- | -------- |
| Support Vector Classifier | 92%      |
| Random Forest             | 96%      |
| Gradient Boosting         | 83.6%    |
| K-Nearest Neighbors       | 92%      |
| Multinomial Naive Bayes   | 96%      |

Random Forest and Multinomial Naive Bayes achieved the highest accuracy.

<br>



## Tech Stack

### Backend

* Python
* Flask
* Scikit-learn
* Pandas
* NumPy

### Frontend

* React
* Vite
* TailwindCSS
* Recharts
* Zustand (state management)

### Machine Learning

* Scikit-learn
* Multiclass classification
* Pickle model deployment

<br>



## Project Structure

```
Medicine-Recommendation-System
│
├── backend
│   ├── main.py
│   ├── model.pkl
│   ├── requirements.txt
│   └── datasets
│       ├── description.csv
│       ├── diets.csv
│       ├── medications.csv
│       ├── precautions_df.csv
│       ├── Symptom-severity.csv
│       ├── symtoms_df.csv
│       ├── Training.csv
│       └── workout_df.csv
│
└── frontend
    └── health-dashboard
        ├── public
        └── src
            ├── assets
            ├── components
            ├── hooks
            ├── pages
            └── store
```

<br>



## How the System Works

1. User enters symptoms in the dashboard.
2. The frontend sends a request to the backend API.
3. The backend loads the trained ML model.
4. Symptoms are encoded and passed to the model.
5. The model predicts the most likely disease.
6. The system retrieves recommendations from datasets.
7. Results are displayed in the dashboard.

<br>



## Installation Guide

### Clone the Repository

```
git clone https://github.com/Yash-Bandal/medicine-recommendation-system.git
cd medicine-recommendation-system
```

<br>



### Backend Setup

```
cd backend
pip install -r requirements.txt
python main.py
```

Backend runs on:

```
http://127.0.0.1:5000

# or - check main.py

http://127.0.0.1:10000
```

<br>



### Frontend Setup

```
cd frontend/health-dashboard
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

<br>


## License

This project is licensed under the MIT License.

<br>


