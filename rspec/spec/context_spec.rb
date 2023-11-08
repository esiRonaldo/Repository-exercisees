RSpec.describe '#even? method' do
    # context is equal to describe
    context 'with even number' do
           it 'should return true' do
            expect(4.even?).to eq(true)
           end
    context 'with odd number' do
           it 'should return false' do
            expect(5.even?).to eq(false)
           end
end