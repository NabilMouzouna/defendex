import { Radio, Shield, Crosshair, Plane } from 'lucide-react'

export const categories = [
    {
      id: 'intelligence',
      title: 'Intelligence | Surveillance | Reconnaissance',
      icon: Radio,
      image: '/api/placeholder/600/400',
      capabilities: [
        'Satellite Monitoring',
        'Cellular Monitoring',
        'Satellite Phone (GMPCS) Monitoring',
        'Radio Monitoring and Signal Analysis',
        'Lawful Interception',
        'Space based RF Emitter Geo Location'
      ]
    },
    {
      id: 'cyber',
      title: 'Cyber Intelligence Solutions',
      icon: Shield,
      image: '/api/placeholder/600/400',
      capabilities: [
        'Open-Source Intelligence and Target Profiling',
        'Network Intelligence Filtering & Target Identification System',
        'Remote Device Data Extraction',
        'Strategic Global Geolocation System',
        'Strategic Global Geolocation call interception Solutions',
        'ADINT (Advertisement Intelligence)',
        'Dark Web Intelligence'
      ]
    },
    {
      id: 'electronic',
      title: 'Electronic Warfare',
      icon: Crosshair,
      image: '/api/placeholder/600/400',
      capabilities: [
        'Anti-Drone System',
        'Remote Controlled Improvised Explosive Device (RCIED) Jammer'
      ]
    },
    {
      id: 'avionics',
      title: 'Avionics',
      icon: Plane,
      image: '/api/placeholder/600/400',
      capabilities: [
        'Surveillance Radar',
        'Modernization, Repair and Overhaul'
      ]
    }
  ]