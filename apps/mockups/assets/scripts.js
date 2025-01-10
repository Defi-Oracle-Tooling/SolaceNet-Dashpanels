document.addEventListener("DOMContentLoaded", () => {
    console.log("Mockup loaded.");

    // Example interactivity: Toggle visibility of sections
    const analyticsSection = document.querySelector('section:nth-of-type(1)');
    const auditLogsSection = document.querySelector('section:nth-of-type(2)');
    const toggleAnalyticsButton = document.createElement('button');
    const toggleAuditLogsButton = document.createElement('button');

    toggleAnalyticsButton.textContent = 'Toggle Analytics';
    toggleAuditLogsButton.textContent = 'Toggle Audit Logs';

    analyticsSection.before(toggleAnalyticsButton);
    auditLogsSection.before(toggleAuditLogsButton);

    toggleAnalyticsButton.addEventListener('click', () => {
        analyticsSection.style.display = analyticsSection.style.display === 'none' ? 'block' : 'none';
    });

    toggleAuditLogsButton.addEventListener('click', () => {
        auditLogsSection.style.display = auditLogsSection.style.display === 'none' ? 'block' : 'none';
    });
});
