# Project Title: Resting Heart Rate Dashboard

This project visualizes resting heart rate scores and their corresponding dates using a web dashboard.

## Project Structure

- **src/**: Contains the main application files.
  - **app.py**: Initializes the web server and sets up routes.
  - **data/**: Contains the raw data file.
    - **oura_2024-10-28_2024-12-28_trends.csv**: Raw data for resting heart rate scores.
  - **static/**: Contains static files for the dashboard.
    - **css/**: Contains CSS styles.
      - **styles.css**: Styles for the dashboard.
    - **js/**: Contains JavaScript files.
      - **scripts.js**: Client-side interactivity and data visualization.
  - **templates/**: Contains HTML templates.
    - **index.html**: Main HTML template for the dashboard.
  - **utils/**: Contains utility functions.
    - **data_processing.py**: Functions for processing CSV data.

- **requirements.txt**: Lists Python dependencies required for the project.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd dashboard-visualization
   ```

3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python src/app.py
   ```

5. Open your web browser and go to `http://127.0.0.1:5000` to view the dashboard.

## Usage

The dashboard displays a visualization of resting heart rate scores over time. You can interact with the data to gain insights into your heart rate trends.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.# heart-rate-dashboard
