# MindGuard

MindGuard is a content-aware parental monitoring prototype developed for an AIoT Hackathon.  
It focuses on protecting children’s digital wellbeing by looking beyond screen time and examining how different types of digital content impact young, developing minds.


## Problem Statement

Children today are exposed to digital screens at very young ages, often consuming content that is fast-paced, visually intense, and designed to maximize engagement. Rapid scene changes and bright colors can overstimulate developing minds, affecting focus and attention over time.

Most existing parental control solutions focus only on screen time and treat all content as equal. As a result, parents lack meaningful insight into the quality and cognitive impact of the content their children consume, leaving overstimulation largely unaddressed in current tech solutions.

## Solution Overview

MindGuard addresses this gap by focusing on content impact rather than screen duration alone.

The system simulates content characteristics such as scene-change speed and color intensity and treats them as virtual sensing inputs. Using simple, explainable, AI-inspired decision logic, MindGuard estimates a Visual Intensity Score and combines it with screen exposure time to identify overstimulation risk.

Instead of restricting content automatically, MindGuard provides parents with clear, privacy-friendly insights that support informed and mindful digital habits.


## Features

- Child View for simulating content characteristics  
- Visual Intensity–based overstimulation detection  
- Parent Dashboard displaying screen exposure and risk alerts  
- Privacy-friendly, explainable decision logic  
- No backend or invasive data collection  


## Tech Stack

- HTML  
- CSS  
- JavaScript  
- Browser localStorage for data persistence  


## AIoT Relevance

MindGuard follows a **virtual AIoT approach**, where software-based sensing simulates IoT-style inputs. Content features such as scene-change frequency and color intensity act as sensing signals, which are processed by AI-inspired rule-based logic. This approach is scalable to real-world devices, metadata streams, and on-device intelligence in future implementations.

## Note

This project is a prototype created for demonstration and ideation purposes. It showcases system design, decision-making logic, and user flow rather than a full production-ready application.
