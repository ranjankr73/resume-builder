const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Generate skill suggestions
router.post('/generate-skills', async (req, res) => {
  try {
    const { jobTitle } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a professional career advisor helping to suggest relevant skills for different job positions."
      }, {
        role: "user",
        content: `Generate a list of 10 relevant technical and soft skills for a ${jobTitle} position. Return only the skills as a comma-separated list.`
      }],
      temperature: 0.7,
    });

    const skills = completion.choices[0].message.content
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0);

    res.json({ skills });
  } catch (error) {
    console.error('Error generating skills:', error);
    res.status(500).json({ message: 'Failed to generate skills' });
  }
});

// Generate work experience description
router.post('/generate-description', async (req, res) => {
  try {
    const { position, company, responsibilities } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a professional resume writer helping to create compelling work experience descriptions."
      }, {
        role: "user",
        content: `Write a concise, professional description for a ${position} position at ${company}. Include these key responsibilities: ${responsibilities}. Use active voice and quantify achievements where possible.`
      }],
      temperature: 0.7,
    });

    const description = completion.choices[0].message.content.trim();
    res.json({ description });
  } catch (error) {
    console.error('Error generating description:', error);
    res.status(500).json({ message: 'Failed to generate description' });
  }
});

module.exports = router;
