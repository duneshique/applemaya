# Maya Moon Portfolio Development Roadmap

This document outlines the analysis performed on the `cms_raw_data.json` and the planned next steps for the website development.

## 1. CMS Data Analysis & Current Gaps

After reviewing `cms_raw_data.json`, the following elements were identified as currently missing or needing enhancement in the portfolio:

### Missing Content Sections

- **Online Classes & Workshops**: Detailed links and descriptions for Bear U, LiveKlass, and the Smart Store Workshop.
- **Offline Classes**: Detailed curricula for Hobby and Professional (Advanced/Master) courses.
- **Certification Details**: Information about "Eco Florist" certification and course completion certificates.
- **Newsletter Subscription**: A dedicated CTA for the Maya Flor newsletter.

### Data & Technical Gaps

- **Purchase Links**: Specific links to Kyobo, YES24, and Aladin for all published books.
- **Legal Information**: Formal footer details including Business Registration Number, address, and CEO name.
- **Social Integration**: Naver Blog and Kakao Talk channel links.
- **Dynamic Content**: Currently, data is hardcoded; the site could benefit from a centralized data fetching strategy from `cms_raw_data.json`.

---

## 2. Development Roadmap

### Phase 1: Foundation & Cleanup (Completed ✅)

- Refactor multi-page layout to single-page design.
- Implement premium aesthetic with Fraunces & Inter fonts.
- Integrate Hero, About, Books, Flowers, Media, and Contact sections.
- Remove legacy multi-language support and unused code.
- **Milestone: v1 Release**

### Phase 2: Content Enrichment (Next Steps 🚀)

- [ ] **Book Section Enhancement**: Add purchase buttons/links for each book.
- [ ] **Workshop & Classes Section**: Create a new section or integrate into "Flowers" detail specifying online/offline courses.
- [ ] **Detailed Footer**: Update the footer with official business information found in the CMS data.
- [ ] **Newsletter CTA**: Add a subtle but premium newsletter signup section.

### Phase 3: Technical Refinement

- [ ] **Data Centralization**: Refactor components to pull content from a unified JSON/CMS source for easier updates.
- [ ] **Interactive Elements**: Add more micro-interactions and refined scroll triggered animations to the newer sections.
- [ ] **Performance Optimization**: Image optimization and lazy loading for heavy assets.

---

## 3. v1 State Summary

The current version (v1) represents a fully functional, high-end portfolio layout. All core sections are visually complete and responsive, providing a solid foundation for further content expansion.
