const try1=useSelector(state=>console.log(state))
console.log(try1)

<Button
title="Notes"
data-test="test-notes-btn"
variant="outlined"
color="primary"
className={
  showNote
    ? 'btn btn-ic btn-notes btn-notes-new selected'
    : 'btn btn-ic btn-notes btn-notes-new'
}
onClick={() => {
  setShowNote(!showNote);
}}
>
Notes
</Button>

 

  getMember
  const eachRecord = useSelector(
    state => state.claimException.codeExceptionDetails.data
  );
  const eachRecord = useSelector(
    (state) => state.tplBilling.TplBillingDetails.tplBillingInvoiceDetailsVO
);


  const getNotesDetail = value => dispatch(getNotesDetails(value));
  const notesData = useSelector(state => state.notes.notesData);
  const saveNotes = obj => dispatch(createNotes(obj));
  const notesSKDetails = useSelector(state => state.notes.notesSKDetails);
  const resetNotes = () => dispatch(resetNoteData());
  const noteRef = useRef();
  const [usageTypeCodeData, setUsageTypeCodeData] = useState([]);
  const [majorSaveClicked, setMajorSaveClicked] = useState(false);
  const [showNote, setShowNote] = useState(false);
    const [notesErrMsgs, setNotesErrMsgs] = useState([]);
  const [isNotesData, setIsNotesData] = useState(false);
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: 'smooth' });
  const noteObj = {
    auditUserID: userDetails.loginUserID,
    auditTimeStamp: new Date(),
    addedAuditUserID: userDetails.loginUserID,
    addedAuditTimeStamp: new Date(),
    versionNo: 0,
    dbRecord: false,
    sortColumn: null,
    tableName: null,
    noteSetSK: null,
    noteSourceName: 'R_URC_MED_TB',
    notesList: [],
    globalNotesList: [],
    checkAll: null,
    addNewLinkRender: null,
    filterLinkRender: null,
    printLinkRender: null,
    completeNotesList: [],
  };
 
  const [notes, setNotes] = React.useState(
    eachRecord?.noteSetVO ? eachRecord.noteSetVO : noteObj
  );
  const [notesListLen, setNotesListLen] = useState(0);

  import * as AppConstants from '../../../SharedModules/AppConstants';
  import NotesComponent from '../../../SharedModules/MicroFrontend/MicrofrontendContainer';
  import {
    createNotes,
    getNotesDetails,
    resetNoteData,
  } from '../../../SharedModules/Note/action';

  useEffect(() => {
    if (showNote) {
      setTimeout(
        () => {
          scrollToRef(noteRef);
        },
        1000
      );
    }
  }, [showNote]);
  useEffect(() => {
    errorMessages && errorMessages.length > 0
      ? setSuccessMessages([])
      : null;
  }, [errorMessages]);
  useEffect(() => {
    resetNotes();
    return () => {
      resetNotes();
    };
  }, []);

  useEffect(() => {
    if (notesData) {
      setNotes({ ...notesData, notesList: [...notesData.notesList] });
      setIsNotesData(true);
    }
  }, [notesData]);
  useEffect(() => {
    if (addDropdowns && addDropdowns['General#G_NOTE_TY_CD']) {
      setUsageTypeCodeData(addDropdowns['General#G_NOTE_TY_CD']);
    }
  }, [addDropdowns]);
  useEffect(() => {
    if (eachRecord) {
      if (eachRecord?.noteSetVO && eachRecord.noteSetVO?.noteSetSK) {
        getNotesDetail(eachRecord.noteSetVO.noteSetSK);
      }
    }
  }, [eachRecord]);

  useEffect(() => {
    if (notesSKDetails && notesSKDetails.noteSetSK) {
      setNotes({ ...notes, noteSetSK: notesSKDetails.noteSetSK });
    }
  }, [notesSKDetails]);

  useEffect(() => {
    if (notesSKDetails && notes.noteSetSK && majorSaveClicked) {
      handleMajorSave();
      setMajorSaveClicked(false)
    }
  }, [notes]);


  useEffect(() => {
    resetNotes();
    onDropdowns([
      Dropdowns.NOTES_USAGE_TYPE_CD,
      Dropdowns.R_PROC_MOD_CD,
      Dropdowns.REV_LOB,
    ]);
    onSysDropdowns({
      inputList: [Dropdowns.MODIFIERS],
    });
    setValues({
      codeType: 'P',
      code: '',
      procedureModifierCode1: '-1',
      procedureModifierCode2: '-1',
      procedureModifierCode3: '-1',
      procedureModifierCode4: '-1',
      byPassSa: 'N',
    });
  }, []);

  const addDropdowns = useSelector(state => state.appDropDowns.appdropdowns);


 // checking notes validations
 if (notesErrMsgs && notesErrMsgs.length > 0) {
  setErrorMessages(notesErrMsgs);
  return false;
}
  if (
    notesListLen !== notes.notesList?.length &&
        ((notesData && notesData.notesList.length < notes.notesList?.length) ||
          (eachRecord?.noteSetVO === null && notes.notesList.length))
  ) {
    setMajorSaveClicked(true);
    saveNotes(notes);
    setNotesListLen(notes.notesList.length);
  } else {
    handleMajorSave();
  }

  noteSetVO: notes.noteSetSK ? notes : null,

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const notesElement=(
  <div ref={noteRef}>
    <NotesComponent
      id="sc-id-edit"
      loginUserID={userDetails.loginUserID}
      setErrorMessages={setErrorMessages}
        setNotesErrMsgs={setNotesErrMsgs}
      type={AppConstants.NOTES}
      viewOnly={false}
      usageTypeCodeData={usageTypeCodeData}
      notes={notes}
      setNotes={setNotes}
    />
  </div>
);
  let notesDiv;

  //checking if it has already notes data

  if (eachRecord?.noteSetVO?.noteSetSK) {
    if (isNotesData) {
      notesDiv = notesElement
    }
  } else {
    notesDiv = notesElement
  }


  {showNote && notesDiv}
