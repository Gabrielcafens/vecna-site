import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import LorePage from '@/pages/Lore'
import CharactersPage from '@/pages/Characters'
import CharacterDetailPage from '@/pages/CharacterDetail'
import NpcsPage from '@/pages/Npcs'
import SpellsPage from '@/pages/Spells'
import ItemsPage from '@/pages/Items'
import MonstersPage from '@/pages/Monsters'
import ClassesPage from '@/pages/Classes'
import ClassDetailPage from '@/pages/ClassDetail'
import PhotosPage from '@/pages/Photos'
import CardsPage from '@/pages/Cards'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LorePage />} />
        <Route path="/personagens" element={<CharactersPage />} />
        <Route path="/personagens/:name" element={<CharacterDetailPage />} />
        <Route path="/npcs" element={<NpcsPage />} />
        <Route path="/magias" element={<SpellsPage />} />
        <Route path="/itens" element={<ItemsPage />} />
        <Route path="/monstros" element={<MonstersPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/:key" element={<ClassDetailPage />} />
        <Route path="/fotos" element={<PhotosPage />} />
        <Route path="/cartas" element={<CardsPage />} />
      </Route>
    </Routes>
  )
}

export default App
