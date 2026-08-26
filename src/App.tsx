import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import LorePage from '@/pages/Lore'
import CharactersPage from '@/pages/Characters'
import CharacterDetailPage from '@/pages/CharacterDetail'
import NpcsPage from '@/pages/Npcs'
import NpcDetailPage from '@/pages/NpcDetail'
import SpellsPage from '@/pages/Spells'
import ItemsPage from '@/pages/Items'
import MonstersPage from '@/pages/Monsters'
import ClassesPage from '@/pages/Classes'
import ClassDetailPage from '@/pages/ClassDetail'
import FeatsPage from '@/pages/Feats'
import BackgroundsPage from '@/pages/Backgrounds'
import RulesPage from '@/pages/Rules'
import ConditionsPage from '@/pages/Conditions'
import SpeciesPage from '@/pages/Species'
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
        <Route path="/npcs/:name" element={<NpcDetailPage />} />
        <Route path="/magias" element={<SpellsPage />} />
        <Route path="/itens" element={<ItemsPage />} />
        <Route path="/monstros" element={<MonstersPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/:key" element={<ClassDetailPage />} />
        <Route path="/talentos" element={<FeatsPage />} />
        <Route path="/antecedentes" element={<BackgroundsPage />} />
        <Route path="/regras" element={<RulesPage />} />
        <Route path="/condicoes" element={<ConditionsPage />} />
        <Route path="/racas" element={<SpeciesPage />} />
        <Route path="/fotos" element={<PhotosPage />} />
        <Route path="/cartas" element={<CardsPage />} />
      </Route>
    </Routes>
  )
}

export default App
