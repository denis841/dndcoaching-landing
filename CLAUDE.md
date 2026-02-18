# Landing Page Project - Claude Instructions

## Project Overview

**Purpose:** Build high-converting landing page for coaching service
**Tech Stack:** Vanilla HTML/CSS/JavaScript (no frameworks)
**Design Philosophy:** High-polish, professional, non-AI-generic aesthetics
**Architecture:** 8-section conversion framework

---

## Core Architecture Framework

Use the **skill-landing-page-architecture** skill at project start and when designing structure.

### The 8 Sections (in order)

| Section | Job | Invoke When |
|---------|-----|-------------|
| **Hero** | Get email or get scroll | Starting build, testing above-fold |
| **Success** | Kill buyer's remorse | After form submission implemented |
| **Problem-Agitate** | Make status quo painful | Writing pain points |
| **Value Stack** | Make saying no feel stupid | Designing offer presentation |
| **Social Proof** | Let others convince them | Adding testimonials |
| **Transformation** | Make outcome tangible | Visualizing results |
| **Secondary CTA** | Catch the scrollers | Adding conversion points |
| **Footer** | Professional legitimacy | Final touches |

**Invoke skill:** `/skill-landing-page-architecture` when planning structure or troubleshooting conversions.

---

## Copy Generation Workflow

### STEP 1: Gather Information (Prompt User)

Before writing ANY copy, ask the user these questions:

1. **Target Audience**
   - Who is this for? (demographics, psychographics)
   - What's their current situation/pain?
   - What language do they use?

2. **Transformation/Outcome**
   - What specific result do they want?
   - What does success look like in 30/60/90 days?
   - What's the ultimate 10x transformation?

3. **Offer Structure**
   - What are they getting? (deliverables)
   - What's the price point?
   - Any bonuses/value-adds?
   - Guarantee details?

4. **Social Proof**
   - Client testimonials with specific results
   - Number of clients served
   - Notable achievements/credentials
   - Media mentions or recognition

5. **Unique Positioning**
   - What makes this different?
   - Why you vs. competitors?
   - Your unique methodology/approach

### STEP 2: Extract from Reference Materials

**Read these files for context:**
- `Mission Statement for coaching.pdf` - Brand voice, values, philosophy
- `Landing-Page-Conversion-Checklist.md` - Conversion principles to apply

**Extract:**
- Core values and mission alignment
- Tone of voice indicators
- Existing conversion insights

### STEP 3: Write Section-by-Section Copy

For each section, ensure copy fulfills its specific **job**:

**Hero:** Clear promise, compelling enough to capture email OR scroll
**Problem-Agitate:** 3 pain points escalating to ultimate fear
**Value Stack:** 4 tiers with perceived value > actual price
**Social Proof:** 3 testimonials with specific, measurable results
**Transformation:** 4-stage journey (quick win → compound → advantage → 10x)

**Tone:** Coaching-specific
- Authoritative (expert positioning)
- Transformative (change-focused)
- Results-oriented (outcome emphasis)
- Empowering (possibility mindset)

**Validation:** Each section must pass its "job" test before moving to next.

---

## Design System Guidelines

### Invoke Frontend Design Skill

Use `/frontend-design` skill when creating:
- UI components (buttons, forms, cards)
- Section layouts
- Visual hierarchy
- Ensuring distinctive, non-AI aesthetics

### Anti-Patterns to AVOID

❌ Generic gradients (purple-blue fades)
❌ Excessive blur effects
❌ Template-looking layouts
❌ Stock photo aesthetics
❌ Default browser button styles
❌ Overused fonts (Poppins everywhere)

### Design Principles

✅ **Mobile-first responsive** - Design for 375px first, scale up
✅ **Clean typography hierarchy** - Max 2-3 font sizes per section
✅ **Purposeful white space** - Breathing room around elements
✅ **Brand-consistent colors** - Extract from `THE LOGO.png`
✅ **Subtle animations** - Smooth, professional, not gimmicky
✅ **High contrast** - Readable text, clear CTAs

### Component Standards

**Buttons:**
- Custom styles (not default)
- Clear hover/active states
- Large touch targets (min 44px height)
- Descriptive labels ("Get Started" not "Submit")

**Forms:**
- Proper input states (focus, error, success)
- Inline validation
- Clear error messages
- Accessibility labels

**Sections:**
- Clear visual hierarchy
- Consistent padding/spacing
- Logical flow top-to-bottom
- Mobile-optimized layouts

---

## File Structure

```
/Users/denis/Desktop/Landing Page/
├── index.html              # Main landing page
├── css/
│   ├── styles.css          # Base styles, typography, utilities
│   ├── sections.css        # Section-specific styles
│   └── responsive.css      # Media queries
├── js/
│   ├── main.js             # Core functionality (scroll, animations)
│   └── form.js             # Form validation & submission
├── assets/
│   ├── images/             # Optimized images
│   └── THE LOGO.png        # Brand logo (existing)
├── CLAUDE.md               # This file
├── Landing-Page-Conversion-Checklist.md  # Reference
└── Mission Statement for coaching.pdf    # Reference
```

**Create this structure when building the landing page.**

---

## Implementation Workflow

### Phase 1: Copy Generation
1. Prompt user for all required information (see Copy Generation Workflow)
2. Read `Mission Statement for coaching.pdf` for brand context
3. Generate section-by-section copy following 8-section framework
4. Validate each section fulfills its job

### Phase 2: HTML Structure
1. Create semantic HTML5 structure
2. One `<section>` per framework section
3. Proper heading hierarchy (h1 → h6)
4. Accessibility attributes (ARIA labels, alt text)
5. Form elements with proper attributes

### Phase 3: CSS Styling
1. Mobile-first approach (320px base)
2. Invoke `/frontend-design` for component design
3. Create custom styles (avoid generic patterns)
4. Responsive breakpoints (768px, 1024px, 1440px)
5. Performance optimization (minimize CSS)

### Phase 4: JavaScript Functionality
1. Form validation (client-side)
2. Smooth scroll behavior
3. Intersection observers (animations on scroll)
4. Form submission handling
5. Error handling & user feedback

### Phase 5: Asset Optimization
1. Compress images (WebP format preferred)
2. Lazy loading for below-fold images
3. Optimize `THE LOGO.png` if needed
4. Generate favicon from logo

### Phase 6: Quality Verification
1. Test against `Landing-Page-Conversion-Checklist.md`
2. Verify each section fulfills its job
3. Mobile responsive testing
4. Performance check (Lighthouse >90)
5. Accessibility audit

### Phase 7: Deployment
1. Choose platform (Vercel recommended)
2. Deploy following instructions below
3. Test live URL
4. Configure domain (if applicable)

---

## Sub-Agent Delegation Patterns

### Use Explore Agent When:
- Searching through `Landing-Page-Conversion-Checklist.md` for specific criteria
- Extracting information from `Mission Statement for coaching.pdf`
- Understanding existing patterns in reference documents
- Researching best practices for specific section types

**Example:** "Explore the conversion checklist to find all requirements for testimonials section"

### Use Plan Agent When:
- Designing complex section layouts (e.g., value stack visualization)
- Planning multi-step verification processes
- Architecting form submission flow
- Making structural decisions that affect multiple sections

**Example:** "Plan the implementation of the value stack section with 4-tier pricing visualization"

### Use Frontend-Design Skill When:
- Creating individual UI components (buttons, cards, forms)
- Designing section layouts that need to be distinctive
- Ensuring designs don't look AI-generated
- Building custom animations or interactions

**Example:** `/frontend-design` - "Create a custom CTA button for hero section"

### Use Landing-Page-Architecture Skill When:
- Starting the build (get structural guidance)
- Reviewing whether sections fulfill their jobs
- Troubleshooting conversion issues
- Deciding section order or content strategy

**Example:** `/skill-landing-page-architecture` - "Review hero section effectiveness"

---

## Quality Verification Process

### 1. Against 8-Section Framework
- [ ] Hero gets email OR scroll
- [ ] Success kills buyer's remorse
- [ ] Problem-Agitate makes status quo painful
- [ ] Value Stack makes "no" feel stupid
- [ ] Social Proof lets others convince
- [ ] Transformation makes outcome tangible
- [ ] Secondary CTA catches scrollers
- [ ] Footer shows legitimacy

### 2. Against Conversion Checklist
- [ ] Score page against all 16 sections in `Landing-Page-Conversion-Checklist.md`
- [ ] Address any items marked as "Priority Fix"
- [ ] Validate testimonials follow best practices
- [ ] Ensure application process is clear

### 3. Design Quality Check
- [ ] Passes "non-AI-generic" test
- [ ] Distinctive visual style
- [ ] Professional polish
- [ ] Brand consistency
- [ ] No anti-patterns present

### 4. Performance Metrics
- [ ] Lighthouse Performance score >90
- [ ] First Contentful Paint <1.5s
- [ ] Largest Contentful Paint <2.5s
- [ ] Cumulative Layout Shift <0.1
- [ ] Mobile responsive (all breakpoints)

### 5. Accessibility Standards
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Alt text for all images
- [ ] Color contrast ratios pass WCAG AA
- [ ] Form labels and error messages

---

## Deployment Instructions

### Option 1: Vercel (Recommended)

**Setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd "/Users/denis/Desktop/Landing Page"
vercel

# Follow prompts:
# - Login to Vercel account
# - Link to existing project or create new
# - Confirm project settings
# - Get deployment URL
```

**Custom Domain:**
1. Go to project settings in Vercel dashboard
2. Add custom domain
3. Configure DNS (add CNAME or A record)
4. Wait for SSL certificate provisioning

**Environment:**
- Auto HTTPS
- Global CDN
- Instant cache invalidation
- Zero config needed for static sites

---

### Option 2: Netlify

**Setup:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd "/Users/denis/Desktop/Landing Page"
netlify deploy

# For production
netlify deploy --prod
```

**Config file** (optional - create `netlify.toml`):
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Custom Domain:**
1. Netlify dashboard → Domain settings
2. Add custom domain
3. Configure DNS
4. SSL auto-provisioned

---

### Option 3: GitHub Pages

**Setup:**
1. Create GitHub repository
2. Add remote and push:
   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Enable Pages:
   - Repo Settings → Pages
   - Source: Deploy from `main` branch
   - Save

**Custom Domain:**
1. Add `CNAME` file with domain name
2. Configure DNS with GitHub's IP addresses
3. Enable HTTPS in Pages settings

**Note:** GitHub Pages has some limitations (no server-side processing, slower deploys)

---

## Action-First Principles

### Just Build It
- Don't ask for permission to create files
- Don't explain what you're about to do
- Create HTML/CSS/JS files directly
- Show results, not intentions

### Generate, Don't Explain
- Write the code immediately
- Build first, discuss after (if needed)
- Let the working page speak for itself

### Parallel Execution
- Create HTML/CSS/JS files simultaneously when possible
- Use multiple tool calls in single message for independent tasks
- Don't wait unnecessarily between file creations

### Use Reference Materials Autonomously
- Read `Mission Statement for coaching.pdf` without asking
- Reference `Landing-Page-Conversion-Checklist.md` directly
- Extract logo colors from `THE LOGO.png` if needed
- Only ask user for info NOT in reference materials

### Verify After Building
- Build complete sections before validation
- Use checklist after implementation, not before
- Test with working code, not theoretical plans
- Fix issues immediately when found

---

## Quick Reference

**Start new section:** Invoke `/skill-landing-page-architecture` for job definition
**Design component:** Invoke `/frontend-design` for distinctive UI
**Search references:** Use Explore agent for checklist/PDF
**Complex planning:** Use Plan agent for multi-step features
**Copy questions:** See "Copy Generation Workflow" section
**File structure:** See "File Structure" section
**Deploy:** See "Deployment Instructions" section

---

## Success Criteria

Landing page is successful when:

✅ All 8 sections present and fulfill their jobs
✅ Copy is conversion-focused and coaching-specific
✅ Design is high-polish and non-AI-generic
✅ Mobile responsive across all devices
✅ Performance score >90 on Lighthouse
✅ Accessibility standards met
✅ Deployed and live on chosen platform
✅ Verified against conversion checklist
✅ User can make updates independently

**Remember:** Every section has ONE job. If you can't name the job, the section doesn't belong.
