class Card
   attr_accessor :rank , :suit

   def initialize(rank,suit) 
    @rank=rank
    @suit=suit
   end
end

RSpec.describe Card do
  
  # before do  
  #   @card=Card.new('Ace','Spades')
  # end

  # def card  
  #   Card.new('Ace','Spades')
  # end

  let (:card) { Card.new('Ace', 'Spades') }
    
  it 'has a rank' do
    expect(card.rank).to eq('Ace')
    card.rank='Queen'
    expect(card.rank).to eq('Queen')
  end
    
    it 'has a suit' do
      card.suit='Nonesense'
      comparison='Spades'
      expect(card.suit).to eq('Spades'),"Hey, i expexte #{comparison} but i got #{card.suit}"
    end
end