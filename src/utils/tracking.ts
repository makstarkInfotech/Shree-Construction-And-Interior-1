// Tracking utility for page visits and user interactions
export const trackingService = {
  // Track page view
  trackPageView: (pageId: string) => {
    const data = {
      page: pageId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };
    
    // Log to console
    console.log('📊 Page View:', data);
    
    // Store in localStorage for local analytics
    const views = JSON.parse(localStorage.getItem('pageViews') || '[]');
    views.push(data);
    localStorage.setItem('pageViews', JSON.stringify(views));
    
    // Send to external service (optional - configure your endpoint)
    sendToAnalyticsService('page_view', data);
  },

  // Track button clicks
  trackButtonClick: (buttonName: string, pageId: string) => {
    const data = {
      event: 'button_click',
      button: buttonName,
      page: pageId,
      timestamp: new Date().toISOString(),
    };
    
    console.log('🖱️ Button Click:', data);
    
    // Store in localStorage
    const clicks = JSON.parse(localStorage.getItem('buttonClicks') || '[]');
    clicks.push(data);
    localStorage.setItem('buttonClicks', JSON.stringify(clicks));
    
    sendToAnalyticsService('button_click', data);
  },

  // Track form submissions
  trackFormSubmit: (formName: string, pageId: string) => {
    const data = {
      event: 'form_submit',
      form: formName,
      page: pageId,
      timestamp: new Date().toISOString(),
    };
    
    console.log('📝 Form Submit:', data);
    
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push(data);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    
    sendToAnalyticsService('form_submit', data);
  },

  // Get analytics summary
  getAnalyticsSummary: () => {
    return {
      totalPageViews: JSON.parse(localStorage.getItem('pageViews') || '[]').length,
      totalButtonClicks: JSON.parse(localStorage.getItem('buttonClicks') || '[]').length,
      totalFormSubmissions: JSON.parse(localStorage.getItem('formSubmissions') || '[]').length,
      pageViews: JSON.parse(localStorage.getItem('pageViews') || '[]'),
      buttonClicks: JSON.parse(localStorage.getItem('buttonClicks') || '[]'),
      formSubmissions: JSON.parse(localStorage.getItem('formSubmissions') || '[]'),
    };
  },

  // Clear all analytics data
  clearAnalytics: () => {
    localStorage.removeItem('pageViews');
    localStorage.removeItem('buttonClicks');
    localStorage.removeItem('formSubmissions');
    console.log('🗑️ Analytics cleared');
  },

  // Export analytics data as CSV
  exportAnalytics: () => {
    const summary = trackingService.getAnalyticsSummary();
    const csvContent = [
      ['Analytics Report'],
      ['Generated:', new Date().toISOString()],
      [''],
      ['SUMMARY'],
      ['Total Page Views', summary.totalPageViews],
      ['Total Button Clicks', summary.totalButtonClicks],
      ['Total Form Submissions', summary.totalFormSubmissions],
      [''],
      ['PAGE VIEWS DETAIL'],
      ['Page', 'Timestamp', 'User Agent'],
      ...summary.pageViews.map((v: any) => [v.page, v.timestamp, v.userAgent]),
      [''],
      ['BUTTON CLICKS DETAIL'],
      ['Button', 'Page', 'Timestamp'],
      ...summary.buttonClicks.map((c: any) => [c.button, c.page, c.timestamp]),
      [''],
      ['FORM SUBMISSIONS DETAIL'],
      ['Form', 'Page', 'Timestamp'],
      ...summary.formSubmissions.map((s: any) => [s.form, s.page, s.timestamp]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  },
};

// Send data to external analytics service (configure with your endpoint)
const sendToAnalyticsService = async (eventType: string, data: any) => {
  try {
    // Example: Send to a backend service
    // Uncomment and update with your analytics endpoint
    /*
    await fetch('https://your-analytics-service.com/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType, ...data }),
    });
    */
  } catch (error) {
    console.error('Failed to send analytics:', error);
  }
};
