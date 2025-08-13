# Personalized-Medical-Recommendation-System-with-Machine-Learning
Welcome to our cutting-edge Personalized Medical Recommendation System, a powerful platform designed to assist users in understanding and managing their health. Leveraging the capabilities of machine learning, our system analyzes user-input symptoms to predict potential diseases accurately. Here's what sets our system apart:

User-Friendly Interface: Our intuitive interface allows users to input their symptoms effortlessly, creating a seamless user experience.

Advanced Machine Learning Models: We've integrated state-of-the-art machine learning models that accurately predict diseases based on input symptoms, ensuring reliable and precise results.

Tailored Recommendations: Receive personalized recommendations for the top 5 medicines, prescription details, and even workout routines based on the predicted disease.

Flask App Integration: The entire system is powered by a Flask web application, making it easily accessible to users. Experience the convenience of accessing healthcare recommendations from anywhere.

Privacy and Security: We prioritize user privacy and data security. Your health information is handled with the utmost confidentiality, adhering to the highest industry standards.

Continuous Improvement: Our system is designed for continuous improvement. As we gather more data, the machine learning models evolve, providing increasingly accurate and relevant recommendations.

Take charge of your health with our Personalized Medical Recommendation System. Your well-being is our priority, and we're dedicated to providing you with the tools and insights you need for a healthier, happier life.

Requirements: Anaconda Navigator,Jupyter notebook,Required libraries

[Link](https://www.kaggle.com/code/yashbandal25/medicine-recommendation-system/edit)

[Oldweb](https://yash-bandal.github.io/Medicine-Recommendation-System/ML-Medicine%20Recommendation%20System/templates/index2.html)
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
