# Security Policy

**Last Updated: February 2026**

## 1. Overview

mBiz is committed to maintaining the highest standards of information security. This Security Policy outlines our commitment to protecting user data, systems, and infrastructure from unauthorized access, disclosure, modification, and destruction.

## 2. Security Principles

We follow these core security principles:

- **Confidentiality**: Only authorized users can access sensitive information
- **Integrity**: Data is accurate, complete, and protected from unauthorized modification
- **Availability**: Services are accessible to authorized users when needed
- **Accountability**: All security actions are logged and monitored

## 3. Data Protection

### 3.1 Encryption
- **In Transit**: All data transmitted between your device and our servers uses TLS 1.2+ encryption
- **At Rest**: Sensitive data in our databases is encrypted using AES-256 encryption
- **Passwords**: User passwords are hashed using industry-standard algorithms (bcrypt)

### 3.2 Access Controls
- **Authentication**: Two-Factor Authentication (2FA) available for all accounts
- **Authorization**: Role-based access control (RBAC) restricts data access to authorized personnel only
- **Session Management**: Automatic session timeout after 30 minutes of inactivity
- **Password Policy**: Minimum 12 characters, mix of uppercase, lowercase, numbers, and special characters

### 3.3 Database Security
- **Backups**: Automated daily backups with encryption and off-site redundancy
- **Isolation**: Databases are isolated within secure network segments
- **Monitoring**: Real-time database activity monitoring and alerting
- **Access Logging**: All database access is logged with timestamp and user identification

## 4. Infrastructure Security

### 4.1 Network Security
- **Firewalls**: Multi-layered firewall protection against unauthorized access
- **DDoS Protection**: Distributed Denial-of-Service attack mitigation
- **VPN**: Private Virtual Network for secure communication between systems
- **Intrusion Detection**: Real-time monitoring for suspicious activities

### 4.2 Server Security
- **Patch Management**: Regular security updates and patches applied within 24-48 hours
- **Hardening**: Servers configured with minimal services and unnecessary ports disabled
- **Monitoring**: Continuous system monitoring for vulnerabilities and threats
- **CDN**: Content Delivery Network protection against attacks

### 4.3 Cloud Infrastructure
- **Compliance**: Cloud providers certified for ISO 27001, SOC 2 Type II
- **Redundancy**: Multi-region redundancy for high availability
- **Isolation**: Customer data segregated and isolated from other tenants
- **Encryption Keys**: Managed encryption keys with automatic rotation

## 5. Application Security

### 5.1 Development Practices
- **Code Review**: All code changes reviewed by security team before deployment
- **SAST**: Static Application Security Testing integrated into CI/CD pipeline
- **DAST**: Dynamic Application Security Testing performed before releases
- **Dependency Scanning**: Regular vulnerability scanning of third-party libraries
- **Secure Coding**: Development team trained in OWASP Top 10 prevention

### 5.2 API Security
- **Authentication**: OAuth 2.0 and API key-based authentication
- **Rate Limiting**: Protection against brute-force and API abuse
- **Input Validation**: Strict validation and sanitization of all inputs
- **Output Encoding**: Proper encoding to prevent injection attacks
- **CORS**: Cross-Origin Resource Sharing properly configured

### 5.3 Security Testing
- **Penetration Testing**: Annual third-party penetration tests
- **Vulnerability Assessment**: Quarterly vulnerability assessments
- **Bug Bounty**: Responsible disclosure program for security researchers
- **Security Audits**: Regular internal and external security audits

## 6. Data Breach Response

### 6.1 Incident Response Plan
- **Detection**: 24/7 monitoring for security incidents
- **Response Team**: Dedicated incident response team on standby
- **Communication**: Notification to affected users within 24-72 hours of confirmed breach
- **Documentation**: Incident logs maintained for regulatory compliance

### 6.2 Notification
In the event of a data breach involving personal information, we will notify affected users via:
- Email notification to registered email address
- In-app notification
- Public statement on our website
- Regulatory authorities (as required by law)

## 7. Employee Security

### 7.1 Access Management
- **Principle of Least Privilege**: Employees granted minimum necessary access
- **Onboarding**: Security training required for all new employees
- **Offboarding**: Immediate account deactivation and access revocation upon termination
- **Background Checks**: Conducted for positions with access to sensitive data

### 7.2 Training & Awareness
- **Initial Training**: All employees undergo security awareness training
- **Ongoing Education**: Quarterly security updates and training
- **Phishing Simulations**: Regular phishing simulations and reporting
- **Security Culture**: Foster a culture of security consciousness

### 7.3 Confidentiality
- **NDAs**: Non-Disclosure Agreements signed by all employees
- **Data Handling**: Strict policies on data handling and protection
- **Remote Work**: Secure VPN and encrypted communication requirements

## 8. Third-Party Security

### 8.1 Vendor Assessment
- **Due Diligence**: Security assessment before engaging third-party vendors
- **Contracts**: Security clauses included in all vendor agreements
- **Compliance**: Vendors must comply with same security standards
- **Audits**: Regular audits of vendor security practices

### 8.2 Subprocessors
We may use the following categories of subprocessors:
- Payment processors and financial institutions
- Cloud infrastructure providers
- Analytics and monitoring services
- Customer support platforms
- Email and communication services

Full list available upon request.

## 9. Compliance & Standards

mBiz complies with the following standards and regulations:

- **GDPR**: General Data Protection Regulation (EU)
- **CCPA**: California Consumer Privacy Act
- **POPIA**: Protection of Personal Information Act (South Africa)
- **ISO 27001**: Information Security Management
- **PCI DSS**: Payment Card Industry Data Security Standard (Level 1)
- **SOC 2**: Service Organization Control compliance

## 10. Vulnerability Management

### 10.1 Vulnerability Disclosure
We encourage responsible disclosure of security vulnerabilities. If you discover a vulnerability, please:

1. **Do NOT** publicly disclose the vulnerability
2. Email support@mbizapp.com with details
3. Include proof-of-concept if possible
4. Allow us 30 days to address before disclosure

### 10.2 Vulnerability Handling
- **Triage**: Assessment and severity classification within 24 hours
- **Fix**: Development and testing of security patch
- **Release**: Timely deployment of fixes
- **Verification**: Confirmation that vulnerability is resolved
- **Disclosure**: Public disclosure after fix is deployed (coordinated)

## 11. Security Tools & Monitoring

### 11.1 Monitoring Systems
- **SIEM**: Security Information and Event Management system
- **Log Aggregation**: Centralized logging for all systems
- **Alerts**: Real-time alerting for suspicious activities
- **Analytics**: Behavioral analytics to detect anomalies

### 11.2 Penetration Testing Tools
- Regular assessments using industry-standard tools
- Results documented and addressed
- External auditors conduct independent tests

## 12. Incident Disclosure

In case of a security incident affecting user data:

1. We will investigate the incident thoroughly
2. Notify affected users and authorities as required
3. Provide information about the incident, affected data, and steps taken
4. Offer remediation assistance if applicable

## 13. Security Updates & Patches

### 13.1 Update Schedule
- **Critical**: Deployed immediately
- **High**: Within 24-48 hours
- **Medium**: Within 7 days
- **Low**: Within 30 days

### 13.2 Maintenance Windows
Security updates may be deployed during:
- Scheduled maintenance windows (notified in advance)
- Emergency patches may be deployed immediately
- Minimal downtime (typically under 5 minutes)

## 14. Continuous Improvement

### 14.1 Security Reviews
- **Quarterly**: Internal security reviews
- **Annual**: Third-party security audits
- **On-Demand**: Response to emerging threats or incidents

### 14.2 Policy Updates
This Security Policy is reviewed and updated annually or when significant changes occur.

## 15. Contact & Questions

For security-related questions or concerns:

**mBiz Security Team**
Email: support@mbizapp.com
Phone: +254 (0) 123 456 789
GPG Key: Available upon request

For responsible vulnerability disclosure:
Email: support@mbizapp.com
Subject: "SECURITY VULNERABILITY REPORT"

---

**mBiz is committed to maintaining the trust you place in us with your business data.**
