'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Announcement {
  id: number
  message: string
  severity: 'green' | 'yellow' | 'red'
}

const announcementsData: Announcement[] = [
  { id: 1, message: "Please make your way to your designated classroom. Happy hacking!", severity: "green" },
  { id: 2, message: "Thank you to COBS Oakville for their generous sponsorship of pastries! You can try some for yourself in the Pit (Forum outside the Theatre)", severity: "green" }
];

export function Announcements() {
  const [announcements, setAnnouncements] = useState(announcementsData);

  if (!announcements || announcements.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Announcements</h2>
      <AnimatePresence>
        {announcements.map((announcement) => (
          <motion.div
            key={`announcement-${announcement.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`mb-2 p-2 rounded-md ${
              announcement.severity === 'green'
                ? 'bg-green-500'
                : announcement.severity === 'yellow'
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}
          >
            <p className="text-sm">{announcement.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

