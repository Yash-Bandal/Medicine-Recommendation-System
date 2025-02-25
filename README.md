# Machine Learning-Based Medicine Recommendation and Disease Prediction

## Overview
This project utilizes machine learning to predict diseases based on input symptoms and provides recommendations such as medications, workouts, precautions, and dietary suggestions.

## Features
- Predicts diseases based on symptoms using multiple machine learning models.
- Provides a brief description of the predicted disease.
- Suggests relevant medications.
- Offers precautionary measures to manage or prevent the disease.
- Recommends dietary plans and workout routines specific to the predicted disease.

## Technologies Used
- **Programming Language**: Python
- **Machine Learning Models**:
  - Support Vector Classifier (SVC)
  - Random Forest Classifier
  - Gradient Boosting Classifier
  - K-Nearest Neighbors (KNeighbors)
  - Multinomial Naive Bayes (MultinomialNB)
- **Libraries**:
  - Scikit-learn
  - Pandas
  - NumPy

## Dataset
The project uses multiple datasets containing information about diseases, their symptoms, medications, precautions, diets, and workouts.

## Model Training
The models are trained on labeled datasets containing symptoms and their corresponding diseases. The best-performing model is selected for making predictions based on symptoms provided by the user.

## How It Works
1. The user inputs symptoms.
2. The trained models predict the most probable disease.
3. The helper function fetches relevant details:
   - Disease description
   - Recommended precautions
   - Suggested medications
   - Diet plans
   - Workout recommendations
4. The results are displayed to the user.

## Code Example

```python
models = {
    'SVC': SVC(kernel='linear'),
    'RandomForest': RandomForestClassifier(n_estimators=100, random_state=42),
    'GradientBoosting': GradientBoostingClassifier(n_estimators=100, random_state=42),
    'KNeighbors': KNeighborsClassifier(n_neighbors=5),
    'MultinomialNB': MultinomialNB()
}

def helper(dis):
    desc = description[description['Disease'] == dis]['Description']
    desc = " ".join([w for w in desc])

    pre = precautions[precautions['Disease'] == dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']]
    pre = [col for col in pre.values]

    med = medications[medications['Disease'] == dis]['Medication']
    med = [med for med in med.values]

    die = diets[diets['Disease'] == dis]['Diet']
    die = [die for die in die.values]

    wrkout = workout[workout['disease'] == dis]['workout']

    return desc, pre, med, die, wrkout
```

## Setup Instructions
```bash
git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/Yash-Bandal/Medicine-Recommendation-System.git)
cd Medicine-Recommendation-System
pip install -r requirements.txt
python main.py
```

## Future Enhancements
- Integration of deep learning models for improved accuracy.
- Deployment as a web application for accessibility.
- Addition of more diseases and symptoms to the dataset.

## Contributions
Contributions are welcome! Please open an issue or submit a pull request if you would like to improve the project.


```
