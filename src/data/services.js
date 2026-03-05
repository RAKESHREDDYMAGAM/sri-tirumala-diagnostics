import {
  Microscope,
  ScanSearch,
  Droplets,
  FlaskConical,
  Activity,
  Home,
} from 'lucide-react'

export const services = [
  {
    id: 'microbiology',
    title: 'Microbiology',
    description: 'Culture and sensitivity testing, parasite detection, and other microbiological analyses. Identifying infections accurately.',
    icon: Microscope,
  },
  {
    id: 'histopathology',
    title: 'Histopathology',
    description: 'Tissue examination and biopsy analysis. Our pathologists provide accurate histopathological reports for diagnosis and treatment planning.',
    icon: ScanSearch,
  },
  {
    id: 'haematology',
    title: 'Haematology',
    description: 'Complete blood count (CBC) and other haematological investigations. Essential for diagnosing various blood-related health conditions.',
    icon: Droplets,
  },
  {
    id: 'biochemistry',
    title: 'Biochemistry',
    description: 'Advanced biochemical analysis including blood sugar, lipid profile, liver and kidney function tests. Reliable results you can trust.',
    icon: FlaskConical,
  },
  {
    id: 'ecg',
    title: 'ECG',
    description: 'Electrocardiogram testing for heart health assessment. Quick and painless ECGs performed by trained technicians.',
    icon: Activity,
  },
  {
    id: 'home-visit',
    title: 'Home Visit Available',
    description: 'Convenient home visit service. Our trained staff will visit your doorstep for sample collection and ECGs at your preferred time.',
    icon: Home,
  },
]
