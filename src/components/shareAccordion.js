import { Accordion, AccordionDetails, AccordionSummary, Card, CardHeader, Container, IconButton, Typography } from "@mui/material"
import { HashSharedCards } from "./hashTextCard"
import { ExpandMore, Send } from "@mui/icons-material"

export const ShareAccordion = ({ origin, sharedItems, addressee, _id }) => {
    return (
        <Accordion sx={{ background: 'transparent', minWidth: '30vw', maxWidth: '85vw' }}>
            <AccordionSummary expandIcon={<ExpandMore />} id="sharedFrom">
                <Typography>Compartido por: {origin}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Container maxWidth='sm'>
                    <HashSharedCards key={_id} hashes={sharedItems} shareInfo={{
                        addressee: addressee,
                        origin: origin
                    }} />
                </Container>
            </AccordionDetails>
        </Accordion>
    )
}

export const ShareWith = ({ user: { name, email }, selected, origin, handler }) => {
    return (
        <Card>
            <CardHeader
                title={name}
                subheader={email}
                action={
                    <IconButton onClick={() => {
                        handler({ origin: origin, sharedItems: selected, addressee: email })
                    }}>
                        <Send />
                    </IconButton>
                }
            />
        </Card>
    )
}