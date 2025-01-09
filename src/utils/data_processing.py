import pandas as pd

def load_data(file_path):
    df = pd.read_csv(file_path)
    df['date'] = pd.to_datetime(df['date']).dt.date
    return df

def get_resting_heart_rate_scores(df):
    return df[['date', 'Resting Heart Rate Score']].to_dict(orient='records')